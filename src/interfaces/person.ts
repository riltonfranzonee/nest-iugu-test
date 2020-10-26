import { CreatePersonDto } from '../octadesk/dto/person.dto';

export default interface IPerson {
  create: (createPersonDto: CreatePersonDto) => Promise<any>;
  index: (email: string) => Promise<any>;
}
