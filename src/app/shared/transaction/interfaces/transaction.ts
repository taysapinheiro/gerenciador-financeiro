import { TransactionEnum } from '../enums/transaction-type';

export interface Transaction {
  id: number;
  title: string;
  value: number;
  type: TransactionEnum;
}

export type TransactionPayload = Omit<Transaction, 'id'>;
