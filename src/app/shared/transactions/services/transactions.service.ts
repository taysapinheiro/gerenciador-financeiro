import { getTransactionByIdResolver } from './../../../features/home/pages/create-or-edit/resolvers/get-transaction-by-id-resolver';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Transaction, TransactionPayload } from '../../transaction/interfaces/transaction';

const API_URL = 'http://localhost:3000/transactions';
@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Transaction[]>(API_URL);
  }

  getTransactionByIdResolver(id: string) {
    return this.httpClient.get<Transaction>(`${API_URL}/${id}`);
  }

  post(transaction: TransactionPayload) {
    return this.httpClient.post<Transaction>(API_URL, transaction);
  }

  put(id: number, transaction: TransactionPayload) {
    return this.httpClient.put<Transaction>(`${API_URL}/${id}`, transaction);
  }
}
