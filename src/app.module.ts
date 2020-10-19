import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { IuguInvoiceService } from './iugu/iugu.invoices.service';
import { IuguPlanService } from './iugu/iugu.plans.service';
import { IuguCustomerService } from './iugu/iugu.customers.service';
import { IuguSubscriptionService } from './iugu/iugu.subscriptions.service';
import { IuguModule } from './iugu/iugu.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TodosModule,
    IuguModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    IuguCustomerService,
    IuguInvoiceService,
    IuguPlanService,
    IuguSubscriptionService,
  ],
})
export class AppModule {}
