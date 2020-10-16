import { Module, HttpModule } from '@nestjs/common';

import { IuguCustomerService } from './iugu.customers.service';
import { IuguInvoiceService } from './iugu.invoices.service';

@Module({
  imports: [HttpModule],
  providers: [IuguInvoiceService, IuguCustomerService],
})
export class IuguModule {}
