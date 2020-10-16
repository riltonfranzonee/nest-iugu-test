import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IuguClientService } from './iugu/iugu.clients.service';
import { IuguInvoiceService } from './iugu/iugu.invoices.service';
import { IuguPlanService } from './iugu/iugu.plans.service';
import { IuguSubscriptionService } from './iugu/iugu.subscriptions.service';

import { Client } from './iugu/dto/clients-dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly clientService: IuguClientService,
    private readonly invoiceService: IuguInvoiceService,
    private readonly planService: IuguPlanService,
    private readonly subscriptionService: IuguSubscriptionService,
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

  @Get('/client-list')
  async listClients(): Promise<any> {
    return await this.clientService.listAll();
  }

  @Get('/plan-create')
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

  @Get('/subscription-create')
  async createSubscription(): Promise<any> {
    const subscription = await this.subscriptionService.create({
      customer_id: '9A330DC6E3324F76B3783021F26217B1',
      plan_identifier: 'test-plan-1',
    });

    return subscription;
  }

  @Get('/subscriptions-list')
  async listSubscriptions(): Promise<any> {
    return await this.subscriptionService.listAll();
  }
}
