import {
  ICreateTodoGateway,
  IDeleteTodoGateway,
  ITodo,
  ITodoCreateArgs,
  ITodoDeleteArgs,
  ITodosGateway,
  ITodoUpdateArgs,
  IUpdateTodoGateway,
} from '@natalia/nest/interfaces/todo';
import { TodoService } from '@natalia/nest/services/todo';
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('todos')
export class TodoController
  implements
    ITodosGateway,
    ICreateTodoGateway,
    IUpdateTodoGateway,
    IDeleteTodoGateway
{
  constructor(private _todoService: TodoService) {}

  @Get()
  todos(): ITodo[] {
    return this._todoService.todos();
  }


  
  @Post()
  createTodo(@Body() args: ITodoCreateArgs): ITodo {
    return this._todoService.createTodo(args);
  }

  @Put()
  updateTodo(@Body() args: ITodoUpdateArgs): ITodo {
    return this._todoService.updateTodo(args);
  }

  @Delete()
  deleteTodo(@Body() args: ITodoDeleteArgs): ITodo {
    return this._todoService.deleteTodo(args);
  }
}
