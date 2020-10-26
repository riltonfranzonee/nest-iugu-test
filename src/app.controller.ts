import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { IuguCustomerService } from './iugu/iugu.customers.service';
import { IuguInvoiceService } from './iugu/iugu.invoices.service';
import { IuguPlanService } from './iugu/iugu.plans.service';
import { IuguSubscriptionService } from './iugu/iugu.subscriptions.service';
import { StatesService } from './states/states.service';
import { CitiesService } from './cities/cities.service';
import { TicketService } from './octadesk/ticket.service';

import { Customer } from './iugu/dto/customers-dto';
import { Subscription } from './iugu/dto/subscriptions-dto';
import { CreateTicketDto } from './octadesk/dto/tickets.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly customerService: IuguCustomerService,
    private readonly invoiceService: IuguInvoiceService,
    private readonly planService: IuguPlanService,
    private readonly subscriptionService: IuguSubscriptionService,
    private readonly statesService: StatesService,
    private readonly citiesService: CitiesService,
    private readonly ticketService: TicketService,
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
    return await this.invoiceService.findAll();
  }

  @Get('/Customer-create')
  async createCustomer(): Promise<Customer> {
    return await this.customerService.create({
      name: 'rilton',
      email: 'rilton@somosmesha.com',
      zip_code: '27285230',
      number: 110,
    });
  }

  @Get('/Customer-list')
  async listCustomers(): Promise<any> {
    return await this.customerService.findAll();
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
    return await this.invoiceService.findAll();
  }

  @Get('/subscription-create')
  async createSubscription(): Promise<Subscription> {
    const subscription = await this.subscriptionService.create({
      customer_id: '9A330DC6E3324F76B3783021F26217B1',
      plan_identifier: 'test-plan-1',
    });

    return subscription;
  }

  @Get('/subscriptions-list')
  async listSubscriptions(): Promise<Subscription[]> {
    return await this.subscriptionService.findAll();
  }

  @Get('/import-states')
  async importStates(): Promise<void> {
    await this.statesService.importStates();
  }

  @Get('/import-cities')
  async importCities(): Promise<void> {
    await this.citiesService.importCities();
  }

  @Post('/create-ticket')
  async createTicket(@Body() data: CreateTicketDto): Promise<any> {
    const res = await this.ticketService.create(data);

    return res;
  }
}
