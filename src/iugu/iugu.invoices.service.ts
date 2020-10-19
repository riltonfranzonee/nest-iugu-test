import { Injectable } from '@nestjs/common';

import { CreateInvoiceDto, RegenerateInvoiceDto } from './dto/invoices-dto';

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

  public async regenerate(
    id: string,
    regenrateInvoiceDto: RegenerateInvoiceDto,
  ): Promise<boolean> {
    try {
      await api.post(`/invoices/${id}/duplicate`, regenrateInvoiceDto);
      return true;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async cancel(id: string): Promise<boolean> {
    try {
      await api.put(`/invoices/${id}/cancel`);

      return true;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async sendEmail(id: string): Promise<boolean> {
    try {
      await api.post(`/invoices/${id}/send_email`);

      return true;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async findAll(): Promise<any[]> {
    try {
      const { data } = await api.get('/invoices');

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async find(id: string): Promise<any> {
    try {
      const { data } = await api.get(`/invoices/${id}`);

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async refund(
    id: string,
    partial_value_refund_cents?: number,
  ): Promise<boolean> {
    try {
      await api.post(
        `/invoices/${id}/refund`,
        partial_value_refund_cents ? { partial_value_refund_cents } : {},
      );

      return true;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }
}
