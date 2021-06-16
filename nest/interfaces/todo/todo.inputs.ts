export interface ITodoCreateInput {
  title: string;
  description: string;
}

export interface ITodoWhereUniqueInput {
  id: number;
}

export interface ITodoUpdateInput {
  id: number;
  title: string;
  description: string;
}
