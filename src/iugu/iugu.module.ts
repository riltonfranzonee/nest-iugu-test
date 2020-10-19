import { Module, HttpModule } from '@nestjs/common';

import { IuguCustomerService } from './iugu.customers.service';
import { IuguInvoiceService } from './iugu.invoices.service';
import { IuguPlanService } from './iugu.plans.service';
import { IuguSubscriptionService } from './iugu.subscriptions.service';

@Module({
  imports: [HttpModule],
  providers: [
    IuguInvoiceService,
    IuguCustomerService,
    IuguPlanService,
    IuguSubscriptionService,
  ],
})
export class IuguModule {}
