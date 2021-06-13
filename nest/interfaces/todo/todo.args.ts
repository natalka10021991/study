import {
  ITodoCreateInput,
  ITodoUpdateInput,
  ITodoWhereUniqueInput,
} from './todo.inputs';

export interface ITodoCreateArgs {
  data: ITodoCreateInput;
}

export interface ITodoUpdateArgs {
  data: ITodoUpdateInput;

  where: ITodoWhereUniqueInput;
}

export interface ITodoDeleteArgs {
  where: ITodoWhereUniqueInput;
}
