import { Component, inject, OnInit, signal } from '@angular/core';
import { BalanceCard } from './components/balance-card/balance-card';
import { Balance } from './components/balance/balance';
import { TransactionItem } from '../components/transaction-item/transaction-item';
import { Transaction } from '../../shared/transaction/interfaces/transaction';
import { TransactionEnum } from '../../shared/transaction/enums/transaction-type';
import { NoTransactions } from '../components/no-transactions/no-transactions';
import { HttpClient } from '@angular/common/http';
import { TransactionsService } from '../../shared/transactions/services/transactions.service';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { FeedbackService } from '../../shared/feedback/services/feedback';

@Component({
  selector: 'app-home',
  imports: [
    Balance,
    TransactionItem,
    NoTransactions,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private _transactionsService = inject(TransactionsService);
  private _router = inject(Router);
  private _feedbackService = inject(FeedbackService);

  transactions = signal<Transaction[]>([]);
  isLoading = true;
  valueSpinner = 10;

  ngOnInit() {
    // setTimeout(() => {
    //   this.valueSpinner = 20;
    // }, 1000);

    // setTimeout(() => {
    //   this.valueSpinner = 50;
    //   this.getTransactions();
    // }, 2000);
    this.getTransactions();
  }
  private getTransactions() {
    this.isLoading = true;
    this.valueSpinner = 100;

    this._transactionsService.getAll().subscribe({
      next: (transactions) => {
        this.transactions.set(transactions);
      },
      error: (error) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  onEdit(transaction: Transaction) {
    this._router.navigate(['/edit-transaction', transaction.id]);
  }

  onRemove(transaction: Transaction) {
    this._transactionsService.delete(transaction.id).subscribe({
      next: () => {
        this.removeTransactionFromList(transaction);
        this._feedbackService.success('Transação removida');
      },
      error: () => {
        this._feedbackService.error('Erro ao remover a transação. Tente novamente.');
      },
    });
  }

  private removeTransactionFromList(transaction: Transaction) {
    this.transactions.update((transactions) =>
      transactions.filter((item) => item.id !== transaction.id),
    );
  }
}
