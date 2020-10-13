import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IuguService } from './iugu/iugu.service';

import { Client } from './iugu/dto/clients-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly iuguService: IuguService) {}

  @Get('/invoice-generate')
  async generateInvoice(): Promise<any> {
     await this.iuguService.createInvoice({
      email: 'riltonfranzone@gmail.com',
      due_date: new Date(),
      items: [{ description: 'new invoice', quantity: 1, price_cents: 10000 }],
      payer: {
        name: 'Rilton',
        cpf_cnpj: '12581083727',
        address: {
          zip_code: '27285230',
          number: 110
        }
      }
    });
  
    return { hello: 'ok' };
  }

  @Get('/invoices-list')
  async listInvoices(): Promise<any> {
    return await this.iuguService.listInvoices();
  }


  @Get('/client-create')
  async createClient(): Promise<Client> {
    return await this.iuguService.createClient({
      name: 'rilton',
      email: 'rilton@somosmesha.com',
      zip_code: '27285230',
      number: 110
    })
  }
}
