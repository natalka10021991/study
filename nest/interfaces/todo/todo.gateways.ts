import { Observable } from 'rxjs';
import { ITodoCreateArgs, ITodoDeleteArgs, ITodoUpdateArgs } from './todo.args';
import { ITodo } from './todo.models';

export interface ITodosGateway {
  todos(): Observable<ITodo[]> | Promise<ITodo[]> | ITodo[];
}

export interface ICreateTodoGateway {
  createTodo(args: ITodoCreateArgs): Observable<ITodo> | Promise<ITodo> | ITodo;
}

export interface IUpdateTodoGateway {
  updateTodo(args: ITodoUpdateArgs): Observable<ITodo> | Promise<ITodo> | ITodo;
}

export interface IDeleteTodoGateway {
  deleteTodo(args: ITodoDeleteArgs): Observable<ITodo> | Promise<ITodo> | ITodo;
}
