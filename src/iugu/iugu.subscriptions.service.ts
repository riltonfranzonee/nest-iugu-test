import { Injectable } from '@nestjs/common';

import { CreateSubscriptionDto, Subscription } from './dto/subscriptions-dto';

import ISubscription from '../interfaces/subscription';

import api from './api';

@Injectable()
export class IuguSubscriptionService implements ISubscription {
  public async create(
    createSubscription: CreateSubscriptionDto,
  ): Promise<Subscription> {
    try {
      const { data } = await api.post('/subscriptions', createSubscription);

      return data;
    } catch (err) {
      console.log(err.response.data);
    }
  }

  public async update(
    id: string,
    updateSubscriptionDto: CreateSubscriptionDto,
  ): Promise<Subscription> {
    try {
      const { data } = await api.put(
        `/subscriptions/${id}`,
        updateSubscriptionDto,
      );

      return data;
    } catch (err) {
      console.log(err.response.data);
    }
  }

  public async findAll(): Promise<Subscription[]> {
    try {
      const { data } = await api.get('/subscriptions');

      return data;
    } catch (err) {
      console.log(err.response.data.errors);
    }
  }

  public async activate(id: string): Promise<boolean> {
    try {
      await api.post(`/subscriptions/${id}/activate`);

      return true;
    } catch (err) {
      console.log(err.response.data.errors);
    }
  }

  public async suspend(id: string): Promise<boolean> {
    try {
      await api.post(`/subscriptions/${id}/suspend`);

      return true;
    } catch (err) {
      console.log(err.response.data.errors);
    }
  }

  public async find(id: string): Promise<Subscription> {
    try {
      const { data } = await api.get(`/subscriptions/${id}`);

      return data;
    } catch (err) {
      console.log(err.response.data.errors);
    }
  }

  public async changePlan(
    id: string,
    plan_identifier: string,
  ): Promise<boolean> {
    try {
      await api.post(`/subscriptions/${id}/change_plan/${plan_identifier}`);

      return true;
    } catch (err) {
      console.log(err.response.data.errors);
    }
  }

  public async remove(id: string): Promise<boolean> {
    try {
      await api.delete(`/subscriptions/${id}`);

      return true;
    } catch (err) {
      console.log(err.response.data.errors);
    }
  }
}
