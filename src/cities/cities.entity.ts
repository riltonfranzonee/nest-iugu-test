import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { State } from '../states/states.entity';

@Entity('cidade')
export class City {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => State)
  estado: State;

  @Column()
  codigoIBGE: string;

  @Column()
  codigoIBGE7: string;
}
