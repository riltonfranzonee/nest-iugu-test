import { CreateClientDto, Client } from '../iugu/dto/clients-dto';

export default interface IClient {
  create: (CreateClientDto) => Promise<Client>;
}