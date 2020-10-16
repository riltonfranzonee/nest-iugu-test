import {
  CreateSubscriptionDto,
  Subscription,
} from '../iugu/dto/subscriptions-dto';

export default interface ISubscription {
  create: (
    createSubscriptionDto: CreateSubscriptionDto,
  ) => Promise<Subscription>;
  update: (
    id: string,
    updateDescriptionDto: CreateSubscriptionDto,
  ) => Promise<Subscription>;
  findAll: () => Promise<Subscription[]>;
  find: (id: string) => Promise<Subscription>;
  activate: (id: string) => Promise<boolean>;
  suspend: (id: string) => Promise<boolean>;
  changePlan: (id: string, plan_identifier: string) => Promise<boolean>;
}
