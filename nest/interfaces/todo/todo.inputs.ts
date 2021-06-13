import {
  ITodoDescriptionProp,
  ITodoIdProp,
  ITodoTitleProp,
} from './todo.props';

export interface ITodoCreateInput
  extends ITodoTitleProp,
    ITodoDescriptionProp {}

export interface ITodoWhereUniqueInput extends ITodoIdProp {}

export interface ITodoUpdateInput
  extends ITodoTitleProp,
    ITodoDescriptionProp {}
