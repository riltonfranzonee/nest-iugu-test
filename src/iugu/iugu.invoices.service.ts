import { Injectable } from '@nestjs/common';

import { CreateInvoiceDto } from './dto/invoices-dto';

import InvoiceI  from '../interfaces/invoice';

import api from './api';

@Injectable()
export class IuguInvoiceService implements InvoiceI {
  private token: string;

  public constructor() {
    this.token = 'edf799058840f8ae94b0a1d5eb449cd4';
  }


  private getAuthHeader() {
    const authString =  this.token + ':';

    const encodedString = Buffer.from(authString).toString('base64');

    return `Basic ${encodedString}`;
  };


  public async create(createInvoiceDto: CreateInvoiceDto): Promise<boolean> {
    const header = this.getAuthHeader();

    try {
       await api.post('/invoices', createInvoiceDto, { headers: { Authorization: header }}); 

       return true
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async listAll() {
    const header = this.getAuthHeader();


    try {
      const { data } = await api.get('/invoices', { headers: { Authorization: header }});

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }
}
