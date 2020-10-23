import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { StatesService, StateRepository } from '../states/states.service';
import { StatesModule } from '../states/states.module';
import { CitiesService, CityRepository } from './cities.service';

@Module({
  imports: [
    StatesModule,
    TypeOrmModule.forFeature([CityRepository, StateRepository]),
  ],
  providers: [CitiesService, StatesService],
})
export class CitiesModule {}
