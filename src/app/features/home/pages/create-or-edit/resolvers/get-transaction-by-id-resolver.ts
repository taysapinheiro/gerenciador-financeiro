import { ResolveFn } from '@angular/router';
import { Transaction } from '../../../../../shared/transaction/interfaces/transaction';
import { inject } from '@angular/core';
import { TransactionsService } from '../../../../../shared/transactions/services/transactions.service';

export const getTransactionByIdResolver: ResolveFn<Transaction> = (route, state) => {
  const transactionService = inject(TransactionsService);
  const id = route.paramMap.get('id')!;

  return transactionService.getTransactionByIdResolver(id);
};
