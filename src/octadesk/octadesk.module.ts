import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';

import { TicketRepository, UserRepository } from './ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TicketRepository, UserRepository])],
  providers: [TicketService],
})
export class OctadeskModule {}
