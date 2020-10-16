import { CreateSubscriptionDto } from '../iugu/dto/subscriptions-dto';

export default interface IInvoice {
  create: (createSubscriptionDto: CreateSubscriptionDto) => Promise<boolean>;
  listAll: () => any;
  activate: (id: string) => Promise<boolean>;
}
