import { Component, computed, input } from '@angular/core';
import { BalanceCard } from '../balance-card/balance-card';
import { Transaction } from '../../../../shared/transaction/interfaces/transaction';

@Component({
  selector: 'app-balance',
  imports: [BalanceCard],
  templateUrl: './balance.html',
  styleUrl: './balance.scss',
})
export class Balance {
  transactions = input.required<Transaction[]>();

  totalIncomes = computed(() => {
    return this.transactions()
      .filter((transaction) => transaction.type === 'income')
      .reduce((total, transaction) => total + transaction.value, 0);
  });

  totalOutcomes = computed(() => {
    return this.transactions()
      .filter((transaction) => transaction.type === 'outcome')
      .reduce((total, transaction) => total + transaction.value, 0);
  });

  balance = computed(() => this.totalIncomes() - this.totalOutcomes());
}
