import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TransactionEnum } from '../../../../shared/transaction/enums/transaction-type';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TransactionsService } from '../../../../shared/transactions/services/transactions.service';
import { TransactionPayload } from '../../../../shared/transaction/interfaces/transaction';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../../../shared/feedback/services/feedback';

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
  private _activatedRoute = inject(ActivatedRoute);

  readonly transactionType = TransactionEnum;

  isLoading = false;

  transactionForm = new FormGroup({
    type: new FormControl('', {
      validators: [Validators.required],
    }),
    title: new FormControl('', {
      validators: [Validators.required],
    }),
    value: new FormControl(0, {
      validators: [Validators.required, Validators.min(0.01)],
    }),
  });

  submit() {
    this.isLoading = true;
    if (!this.transactionForm.valid) return;

    const payload: TransactionPayload = {
      type: this.transactionForm.value.type as TransactionEnum,
      title: this.transactionForm.value.title as string,
      value: this.transactionForm.value.value as number,
    };

    this._transactionService.post(payload).subscribe({
      next: () => {
        this.transactionForm.reset();
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
        this._router.navigate(['/']);
        this.openSnackBar();
      },
    });
  }

  openSnackBar() {
    this._feedbackService.success('Transação criada com sucesso!');
  }
}
