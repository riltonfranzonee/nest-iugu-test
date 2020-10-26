import { Repository, EntityRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { State } from './states.entity';

const Excel = require('exceljs');

interface IState {
  nome: string;
  uf: string;
  codigoIBGE: number;
}

@EntityRepository(State)
export class StateRepository extends Repository<State> {}

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: StateRepository,
  ) {}

  public async importStates(): Promise<void> {
    const workbook = new Excel.Workbook();

    await workbook.xlsx.readFile(`${__dirname}/../../lista.xlsx`);

    const worksheet = await workbook.getWorksheet('estados');

    worksheet.eachRow(async (row, index) => {
      if (index === 1) {
        return;
      }

      const state: IState = {
        nome: row.getCell(1).text,
        uf: row.getCell(2).text,
        codigoIBGE: row.getCell(3).text,
      };

      this.stateRepository.insert(state);
    });
  }

  public async getStateByUF(uf: string): Promise<State> {
    const state = await this.stateRepository.findOne({ where: { uf } });

    if (state) {
      return state;
    }
  }
}
