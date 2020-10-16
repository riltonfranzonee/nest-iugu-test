import { Injectable } from '@nestjs/common';

import { CreatePlanDto } from './dto/plans-dto';

import IPlan from '../interfaces/plan';

import api from './api';

@Injectable()
export class IuguPlanService implements IPlan {
  public async create(createPlanDto: CreatePlanDto): Promise<any> {
    try {
      const { data } = await api.post('/plans', createPlanDto);

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async findAll(): Promise<any> {
    try {
      const { data } = await api.get('/plans');

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }
}
