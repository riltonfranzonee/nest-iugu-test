import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatesService } from './states.service';
import { State } from './states.entity';

@Module({
  imports: [TypeOrmModule.forFeature([State])],
  providers: [StatesService],
})
export class StatesModule {}
