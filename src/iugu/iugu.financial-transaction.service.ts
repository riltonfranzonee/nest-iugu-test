import { Injectable } from '@nestjs/common';

import IFinancialTransaction from '../interfaces/financial-transaction';

import api from './api';

@Injectable()
export class IuguFinancialTransactionService implements IFinancialTransaction {
  public async advance(transactions: number[]): Promise<boolean> {
    try {
      const { data } = await api.post(
        '/financial_transaction_requests/advance',
        { transactions },
      );

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async findAll(): Promise<any[]> {
    try {
      const { data } = await api.get('/financial_transaction_requests');

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }
}
