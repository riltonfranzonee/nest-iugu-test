import {
  CreateCustomerDto,
  Customer,
  CreatePaymentMethodDto,
  PaymentMethod,
  UpdatePaymentMethodDto,
} from '../iugu/dto/customers-dto';

export default interface ICustomer {
  create: (createCustomerDto: CreateCustomerDto) => Promise<Customer>;
  update: (
    id: string,
    updateCustomerDto: CreateCustomerDto,
  ) => Promise<Customer>;
  remove: (id: string) => Promise<boolean>;
  findAll: () => Promise<Customer[]>;
  find: (id: string) => Promise<Customer>;
  createPaymentMethod: (
    customer_id: string,
    createPaymentMethodDto: CreatePaymentMethodDto,
  ) => Promise<PaymentMethod>;

  updatePaymentMethod: (
    updatePaymentDto: UpdatePaymentMethodDto,
  ) => Promise<PaymentMethod>;
  removePaymentMethod: (id: string, customer_id: string) => Promise<boolean>;
  findAllPaymentMethods: (customer_id: string) => Promise<PaymentMethod[]>;
}
