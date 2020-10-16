import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IuguClientService } from './iugu/iugu.clients.service';
import { IuguInvoiceService } from './iugu/iugu.invoices.service';

import { Client } from './iugu/dto/clients-dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly clientService: IuguClientService,
    private readonly invoiceService: IuguInvoiceService,
  ) {}

  @Get('/invoice-generate')
  async generateInvoice(): Promise<any> {
    await this.invoiceService.create({
      email: 'riltonfranzone@gmail.com',
      due_date: new Date(),
      items: [{ description: 'new invoice', quantity: 1, price_cents: 10000 }],
      payer: {
        name: 'Rilton',
        cpf_cnpj: '12581083727',
        address: {
          zip_code: '27285230',
          number: 110,
        },
      },
    });

    return { hello: 'ok' };
  }

  @Get('/invoices-list')
  async listInvoices(): Promise<any> {
    return await this.invoiceService.listAll();
  }

  @Get('/client-create')
  async createClient(): Promise<Client> {
    return await this.clientService.create({
      name: 'rilton',
      email: 'rilton@somosmesha.com',
      zip_code: '27285230',
      number: 110,
    });
  }
}
