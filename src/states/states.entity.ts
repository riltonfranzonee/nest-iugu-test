import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('estado')
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  uf: string;

  @Column()
  codigoIBGE: number;
}
