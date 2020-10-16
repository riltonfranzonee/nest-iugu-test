import { CreateClientDto, Client } from '../iugu/dto/clients-dto';

export default interface IClient {
  create: (createClientDto: CreateClientDto) => Promise<Client>;
}
