import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDTO } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  public async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  public async create(createTodoDto: CreateTodoDTO): Promise<Todo> {
    return await this.todoRepository.create(createTodoDto);
  }

  public async update(id: number, updateTodoDto: CreateTodoDTO): Promise<Todo> {
    const todo = await this.todoRepository.findOne(id);

    if (!todo) {
      console.log('todo does not exist');
    }

    await this.todoRepository.update(id, updateTodoDto);

    return this.todoRepository.findOne(id);
  }

  public async delete(id: number): Promise<boolean> {
    await this.todoRepository.delete(id);

    return true;
  }
}
