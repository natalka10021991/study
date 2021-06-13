import {
  ITodoDescriptionProp,
  ITodoIdProp,
  ITodoTitleProp,
} from './todo.props';

export interface ITodo
  extends ITodoIdProp,
    ITodoTitleProp,
    ITodoDescriptionProp {}
