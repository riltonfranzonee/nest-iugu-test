import { CreatePlanDto } from '../iugu/dto/plans-dto';

export default interface IPlan {
  create: (createPlanDto: CreatePlanDto) => Promise<any>;
  findAll: () => any;
}
