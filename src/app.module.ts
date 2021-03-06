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
import { CitiesModule } from './cities/cities.module';
import { StatesService, StateRepository } from './states/states.service';
import { CitiesService, CityRepository } from './cities/cities.service';
import { StatesModule } from './states/states.module';
import { OctadeskModule } from './octadesk/octadesk.module';
import { TicketService } from './octadesk/ticket.service';
import { TicketRepository, UserRepository } from './octadesk/ticket.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([
      StateRepository,
      CityRepository,
      TicketRepository,
      UserRepository,
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TodosModule,
    IuguModule,
    HttpModule,
    CitiesModule,
    StatesModule,
    OctadeskModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    IuguCustomerService,
    IuguInvoiceService,
    IuguPlanService,
    IuguSubscriptionService,
    StatesService,
    TicketService,
    CitiesService,
  ],
})
export class AppModule {}
