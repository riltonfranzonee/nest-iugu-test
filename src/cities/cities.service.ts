import { Repository, EntityRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { City } from './cities.entity';
import { StatesService } from '../states/states.service';
import { State } from '../states/states.entity';

const Excel = require('exceljs');

interface ICity {
  nome: string;
  estado: State;
  codigoIBGE: string;
  codigoIBGE7: string;
}

@EntityRepository(City)
export class CityRepository extends Repository<City> {}

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: CityRepository,
    private readonly stateService: StatesService,
  ) {}

  public async importCities(): Promise<void> {
    const workbook = new Excel.Workbook();

    await workbook.xlsx.readFile(`${__dirname}/lista.xlsx`);

    const worksheet = await workbook.getWorksheet('cidades');

    worksheet.eachRow(async (row, index) => {
      if (index === 1) {
        return;
      }

      const uf = row.getCell(4).text;

      const state = await this.stateService.getStateByUF(uf);

      const city: ICity = {
        nome: row.getCell(1).text,
        estado: state,
        codigoIBGE: row.getCell(2).text.toString(),
        codigoIBGE7: row.getCell(3).text.toString(),
      };

      await this.cityRepository.insert(city);
    });
  }
}
