import { Injectable } from '@nestjs/common';

import IPerson from '../interfaces/person';

import { CreatePersonDto } from './dto/person.dto';

import api from './api';

@Injectable()
export class PersonService implements IPerson {
  public async create(createPersonDto: CreatePersonDto): Promise<any> {
    try {
      const { data } = await api.post('/persons', createPersonDto);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  public async index(email: string): Promise<any> {
    try {
      const { data } = await api.get(`/persons`, { params: { email } });

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
