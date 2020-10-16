import { Injectable } from '@nestjs/common';

import { CreateCustomerDto, Customer } from './dto/customers-dto';

import ICustomer from '../interfaces/customer';

import api from './api';

@Injectable()
export class IuguCustomerService implements ICustomer {
  public async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    try {
      const { data } = await api.post('/customers', createCustomerDto);

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async remove(id: string): Promise<boolean> {
    try {
      await api.delete(`/customers/${id}`);

      return true;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async update(
    id: string,
    updateCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    try {
      const { data } = await api.put(`/customers/${id}`, updateCustomerDto);

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async find(id: string): Promise<Customer> {
    try {
      const { data } = await api.get(`/customers/${id}`);

      return data;
    } catch (err) {
      console.log(err.response.data.errors);
    }
  }

  public async findAll(): Promise<Customer[]> {
    try {
      const { data } = await api.get('/customers');

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }
}
