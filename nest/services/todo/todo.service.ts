import { Injectable } from '@nestjs/common';
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

@Injectable()
export class TodoService
  implements
    ITodosGateway,
    ICreateTodoGateway,
    IUpdateTodoGateway,
    IDeleteTodoGateway
{
  private _todos: ITodo[] = [
    {
      id: 5,
      title: 'title fifth todo',
      description: 'description fifth todo',
    },
    {
      id: 10,
      title: 'title tenth todo',
      description: 'description tenth todo',
    },
  ];

  todos(): ITodo[] {
    return this._todos;
  }

  createTodo(args: ITodoCreateArgs): ITodo {
    const todo = {
      id: this._todos.reduce((id, todo) => {
        return id > todo.id ? id : todo.id + 1;
      }, 1),
      ...args.data,
    };

    this._todos.push(todo);

    return todo;
  }

  updateTodo(args: ITodoUpdateArgs): ITodo {
    let todo: ITodo;

    this._todos.forEach((todo, index) => {
      if (todo.id === args.where.id) {
        todo = this._todos[index] = { ...todo, ...args.data };
      }
    });

    return todo;
  }

  deleteTodo(args: ITodoDeleteArgs): ITodo {
    for (let [index, todo] of this._todos.entries()) {
      if (todo.id === args.where.id) {
        this._todos.splice(index, 1);

        return todo;
      }
    }
  }
}
