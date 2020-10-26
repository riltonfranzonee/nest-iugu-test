import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import ITicket from '../interfaces/ticket';

import { CreateTicketDto, SearchParams } from './dto/tickets.dto';

import api from './api';

import { TicketRepository, UserRepository, Ticket } from './ticket.entity';

@Injectable()
export class TicketService implements ITicket {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: TicketRepository,
    private readonly userRepository: UserRepository,
  ) {}

  public async create(createTicketDto: CreateTicketDto): Promise<any> {
    try {
      const { data } = await api.post('/tickets', createTicketDto);

      const { number: ticketNum, summary: title } = data;

      // this userId should come from the guard
      const userId = '9a5cc5bd-1fe8-4469-825f-75c72df84a41';

      const user = await this.userRepository.findOne(userId);

      await this.ticketRepository.insert({
        ticketNum,
        title,
        user,
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  public async update(
    ticketNum: number,
    updateTicketDto: CreateTicketDto,
  ): Promise<any> {
    try {
      const { data } = await api.put(`/tickets/${ticketNum}`, updateTicketDto);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  public async index(idRequester: string, lastNumber?: number): Promise<any[]> {
    try {
      const { data } = await api.get('/tickets', {
        params: { idRequester, lastNumber },
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  public async indexByNumber(ticketNum: number): Promise<any[]> {
    try {
      const { data } = await api.get(`/tickets/${ticketNum}`);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  public async indexInterations(ticketNum: number): Promise<any> {
    try {
      const { data } = await api.get(`/tickets/${ticketNum}/interactions`);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  public async search(searchParams: SearchParams): Promise<any[]> {
    try {
      const { data } = await api.get('/tickets/search', {
        params: searchParams,
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
