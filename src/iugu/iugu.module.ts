import { Module, HttpModule } from '@nestjs/common';

import { IuguService } from './iugu.service';

@Module({
  imports: [HttpModule],
  providers: [IuguService]
})

export class IuguModule {}
