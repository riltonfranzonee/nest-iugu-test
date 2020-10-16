import { Injectable } from '@nestjs/common';

import { CreateInvoiceDto } from './dto/invoices-dto';

import IInvoice from '../interfaces/invoice';

import api from './api';

@Injectable()
export class IuguInvoiceService implements IInvoice {
  public async create(createInvoiceDto: CreateInvoiceDto): Promise<boolean> {
    try {
      await api.post('/invoices', createInvoiceDto);

      return true;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async listAll(): Promise<any> {
    try {
      const { data } = await api.get('/invoices');

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }
}
