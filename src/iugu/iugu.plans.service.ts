import { Injectable } from '@nestjs/common';

import { CreatePlanDto, Plan } from './dto/plans-dto';

import IPlan from '../interfaces/plan';

import api from './api';

@Injectable()
export class IuguPlanService implements IPlan {
  public async create(createPlanDto: CreatePlanDto): Promise<Plan> {
    try {
      const { data } = await api.post('/plans', createPlanDto);

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async update(id: string, updatePlanDto: CreatePlanDto): Promise<Plan> {
    try {
      const { data } = await api.put(`invoices/${id}`, updatePlanDto);

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async findAll(): Promise<Plan[]> {
    try {
      const { data } = await api.get('/plans');

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async find(id: string): Promise<Plan> {
    try {
      const { data } = await api.get(`/plans/${id}`);

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }
}
