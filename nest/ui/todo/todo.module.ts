import { Module } from '@nestjs/common';
import { ServicesTodoModule } from '@natalia/nest/services/todo';
import { TodoController } from './todo.controller';

@Module({
  controllers: [TodoController],
  imports: [ServicesTodoModule],
})
export class UiTodoModule {}
