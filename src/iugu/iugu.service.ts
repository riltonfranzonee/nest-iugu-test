import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { CreateInvoiceDto } from './dto/invoices-dto';
import { CreateClientDto, Client } from './dto/clients-dto';

import api from './api';

interface IIuguService {
  createInvoice: (CreateInvoiceDto) => Promise<boolean>;
  listInvoices: () => any;
  createClient: (CreateClientDto) => Promise<Client>;
}

@Injectable()
export class IuguService implements IIuguService {
  private token: string;
  private baseUrl: string;

  public constructor() {
    this.token = 'edf799058840f8ae94b0a1d5eb449cd4';
  }


  private getAuthHeader() {
    const authString =  this.token + ':';

    const encodedString = Buffer.from(authString).toString('base64');

    return `Basic ${encodedString}`;
  };


  public async createInvoice(createInvoiceDto: CreateInvoiceDto): Promise<boolean> {
    const header = this.getAuthHeader();

    try {
       await api.post('/invoices', createInvoiceDto, { headers: { Authorization: header }}); 

       return true
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async listInvoices() {
    const header = this.getAuthHeader();


    try {
      const { data } = await api.get('/invoices', {headers: { Authorization: header }});

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }


  public async createClient(createClientDto: CreateClientDto): Promise<Client> {
    const header = this.getAuthHeader();

    try {
      const { data } = await api.post('/customers', createClientDto, { headers: { Authorization: header } })
    
      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }
}
