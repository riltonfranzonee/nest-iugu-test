import { CreateCustomerDto, Customer } from '../iugu/dto/customers-dto';

export default interface ICustomer {
  create: (createCustomerDto: CreateCustomerDto) => Promise<Customer>;
  update: (
    id: string,
    updateCustomerDto: CreateCustomerDto,
  ) => Promise<Customer>;
  remove: (id: string) => Promise<boolean>;
  findAll: () => Promise<Customer[]>;
  find: (id: string) => Promise<Customer>;
}
