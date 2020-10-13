import { CreateClientDto, Client } from '../iugu/dto/clients-dto';

export default interface ClientI {
  create: (CreateClientDto) => Promise<Client>;
}