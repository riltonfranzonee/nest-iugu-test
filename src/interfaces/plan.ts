import { CreatePlanDto } from '../iugu/dto/plans-dto';

export default interface IInvoice {
  create: (createPlanDto: CreatePlanDto) => Promise<any>;
  listAll: () => any;
}
