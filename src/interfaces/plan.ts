import { CreatePlanDto, Plan } from '../iugu/dto/plans-dto';

export default interface IPlan {
  create: (createPlanDto: CreatePlanDto) => Promise<Plan>;
  update: (id: string, updatePlanDto: CreatePlanDto) => Promise<Plan>;
  find: (id: string) => Promise<Plan>;
  findAll: () => Promise<Plan[]>;
}
