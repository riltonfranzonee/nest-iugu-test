import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  EntityRepository,
  Repository,
  ManyToOne,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}

@Entity('tickets')
export class Ticket {
  @PrimaryColumn()
  ticketNum: number;

  @Column()
  title: string;

  @ManyToOne(() => User)
  user: User;
}

@EntityRepository(Ticket)
export class TicketRepository extends Repository<Ticket> {}

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
