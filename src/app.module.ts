import { Module, HttpModule, HttpService } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { IuguService } from './iugu/iugu.service';
import { IuguModule } from './iugu/iugu.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TodosModule, IuguModule, HttpModule],
  controllers: [AppController],
  providers: [AppService, IuguService],
})
export class AppModule {}
