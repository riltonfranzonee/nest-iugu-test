import { CreateTicketDto, SearchParams } from '../octadesk/dto/tickets.dto';

export default interface ITicket {
  create: (createTicketDto: CreateTicketDto) => Promise<any>;
  update: (ticketNum: number, updateTicketDto: CreateTicketDto) => Promise<any>;
  search: (searchParams: SearchParams) => Promise<any>;
  index: (idRequester: string, lastNumber?: number) => Promise<any[]>;
  indexByNumber: (ticketNum: number) => Promise<any>;
  indexInterations: (ticketNum: number) => Promise<any>;
}
