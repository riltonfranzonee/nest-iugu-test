import { Injectable } from '@nestjs/common';

import { CreateClientDto, Client } from './dto/clients-dto';

import IClient  from '../interfaces/client';

import api from './api';

@Injectable()
export class IuguClientService implements IClient {
  private token: string;

  public constructor() {
    this.token = 'edf799058840f8ae94b0a1d5eb449cd4';
  }


  private getAuthHeader() {
    const authString =  this.token + ':';

    const encodedString = Buffer.from(authString).toString('base64');

    return `Basic ${encodedString}`;
  };

  public async create(createClientDto: CreateClientDto): Promise<Client> {
    const header = this.getAuthHeader();

    try {
      const { data } = await api.post('/customers', createClientDto, { headers: { Authorization: header } })
    
      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }
}
