import { Module, HttpModule } from '@nestjs/common';

import { IuguClientService } from './iugu.clients.service';
import { IuguInvoiceService } from './iugu.invoices.service';

@Module({
  imports: [HttpModule],
  providers: [IuguInvoiceService, IuguClientService]
})

export class IuguModule {}
