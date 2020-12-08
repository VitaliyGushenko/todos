import { ITodo } from './ITodo';

export interface ITodoRequestSuccsess {
  type: string;
  data: ITodo;
}

export interface ITodoFetch {
  type: string;
  filter: string;
  value?: string;
}
