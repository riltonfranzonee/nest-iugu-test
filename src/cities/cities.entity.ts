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
  codigoIBGE: number;

  @Column()
  codigoIBGE7: number;
}
