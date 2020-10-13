import { Injectable } from '@nestjs/common';

import { CreateClientDto, Client } from './dto/clients-dto';

import IClient  from '../interfaces/client';

import api from './api';

@Injectable()
export class IuguClientService implements IClient {

  public async create(createClientDto: CreateClientDto): Promise<Client> {
    try {
      const { data } = await api.post('/customers', createClientDto)
    
      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

}
