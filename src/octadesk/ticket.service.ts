import { Injectable } from '@nestjs/common';

import ITicket from '../interfaces/ticket';

import { CreateTicketDto, SearchParams } from './dto/tickets.dto';

import api from './api';

@Injectable()
export class TicketService implements ITicket {
  public async create(createTicketDto: CreateTicketDto): Promise<any> {
    try {
      const { data } = await api.post('/tickets', createTicketDto);

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
