import { Transaction } from './../../../../shared/transaction/interfaces/transaction';
import { Component, computed, inject, input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TransactionEnum } from '../../../../shared/transaction/enums/transaction-type';
import { NgxMaskDirective } from 'ngx-mask';
import { TransactionsService } from '../../../../shared/transactions/services/transactions.service';
import { TransactionPayload } from '../../../../shared/transaction/interfaces/transaction';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { FeedbackService } from '../../../../shared/feedback/services/feedback';
import { tap, Observable } from 'rxjs';

// Strategy Pattern - Interface para operações de transações
interface TransactionStrategy {
  execute(payload: TransactionPayload): Observable<any>;
  getSuccessMessage(): string;
  getErrorMessage(): string;
}

// Estratégia para criar novas transações
class CreateTransactionStrategy implements TransactionStrategy {
  constructor(private transactionService: TransactionsService) {}

  execute(payload: TransactionPayload): Observable<any> {
    return this.transactionService.post(payload).pipe(
      tap(() => {
        // A mensagem de sucesso será tratada no componente
      }),
    );
  }

  getSuccessMessage(): string {
    return 'Transação criada com sucesso!';
  }

  getErrorMessage(): string {
    return 'Erro ao criar transação. Tente novamente mais tarde!';
  }
}

// Estratégia para editar transações existentes
class EditTransactionStrategy implements TransactionStrategy {
  constructor(
    private transactionService: TransactionsService,
    private transaction: Transaction,
  ) {}

  execute(payload: TransactionPayload): Observable<any> {
    if (!this.transaction?.id) {
      throw new Error('Transaction ID is required for edit operation');
    }

    return this.transactionService.put(this.transaction.id, payload).pipe(
      tap(() => {
        // A mensagem de sucesso será tratada no componente
      }),
    );
  }

  getSuccessMessage(): string {
    return 'Transação editada com sucesso!';
  }

  getErrorMessage(): string {
    return 'Erro ao editar transação. Tente novamente mais tarde!';
  }
}

@Component({
  selector: 'app-create',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatAnchor,
    MatButtonModule,
    NgxMaskDirective,
    MatProgressBarModule,
  ],
  templateUrl: './create-or-edit.html',
  styleUrl: './create-or-edit.scss',
})
export class CreateOrEditComponent {
  private _transactionService = inject(TransactionsService);
  private _feedbackService = inject(FeedbackService);
  private _router = inject(Router);

  readonly transactionType = TransactionEnum;

  transaction = input<Transaction>();
  isLoading = false;

  get isEdit(): boolean {
    return Boolean(this.transaction());
  }

  transactionForm = computed(
    () =>
      new FormGroup({
        type: new FormControl(this.transaction()?.type ?? '', {
          validators: [Validators.required],
        }),
        title: new FormControl(this.transaction()?.title ?? '', {
          validators: [Validators.required],
        }),
        value: new FormControl(this.transaction()?.value ?? 0, {
          validators: [Validators.required, Validators.min(0.01)],
        }),
      }),
  );

  submit() {
    this.isLoading = true;

    if (!this.transactionForm().valid) {
      this.isLoading = false;
      return;
    }

    const payload = this.extractPayload();
    const strategy = this.createStrategy();

    strategy.execute(payload).subscribe({
      next: () => this.handleSuccess(strategy),
      error: (error) => this.handleError(error, strategy),
    });
  }

  /**
   * Seleciona a estratégia apropriada com base no modo (edit/create)
   */
  private createStrategy(): TransactionStrategy {
    if (this.isEdit && this.transaction()) {
      return new EditTransactionStrategy(this._transactionService, this.transaction()!);
    }
    return new CreateTransactionStrategy(this._transactionService);
  }

  /**
   * Extrai os dados do formulário e os converte em payload
   */
  private extractPayload(): TransactionPayload {
    const form = this.transactionForm();

    return {
      type: form.value.type as TransactionEnum,
      title: form.value.title as string,
      value: form.value.value as number,
    };
  }

  /**
   * Trata o sucesso da operação
   */
  private handleSuccess(strategy: TransactionStrategy) {
    this.isLoading = false;
    this._feedbackService.success(strategy.getSuccessMessage());
    this._router.navigate(['/']);
  }

  /**
   * Trata erros da operação
   */
  private handleError(error: any, strategy: TransactionStrategy) {
    this.isLoading = false;
    this._feedbackService.error(strategy.getErrorMessage());
    console.error('Transaction operation failed:', error);
  }
}
