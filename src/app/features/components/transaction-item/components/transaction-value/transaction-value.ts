import { Component, computed, input } from '@angular/core';
import { Transaction } from '../../../../../shared/transaction/interfaces/transaction';
import { TransactionEnum } from '../../../../../shared/transaction/enums/transaction-type';

const CssClasses = {
  [TransactionEnum.OUTCOME]: 'outcome',
  [TransactionEnum.INCOME]: 'income',
};

@Component({
  selector: 'app-transaction-value',
  imports: [],
  styleUrl: './transaction-value.scss',
  host: {
    '[class]': 'cssClass()',
  },
  template: `{{ transaction().value }}`,
})
export class TransactionValue {
  transaction = input.required<Transaction>();

  cssClass = computed(() => CssClasses[this.transaction().type]);
}
