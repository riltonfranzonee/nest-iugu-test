import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IuguClientService } from './iugu/iugu.clients.service';
import { IuguInvoiceService } from './iugu/iugu.invoices.service';
import { IuguPlanService } from './iugu/iugu.plans.service';

import { Client } from './iugu/dto/clients-dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly clientService: IuguClientService,
    private readonly invoiceService: IuguInvoiceService,
    private readonly planService: IuguPlanService,
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

  @Get('/create-plan')
  async createPlan(): Promise<any> {
    const plan = await this.planService.create({
      name: 'Teste',
      identifier: 'test-plan-1',
      interval: 1,
      interval_type: 'months',
      value_cents: 10000,
    });

    return plan;
  }

  @Get('/plans-list')
  async listPlans(): Promise<any> {
    return await this.invoiceService.listAll();
  }
}
