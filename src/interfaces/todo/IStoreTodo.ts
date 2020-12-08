import { ITodo } from './ITodo';

export interface IStoreTodo {
  data: Array<ITodo>;
  error: boolean;
  loading: boolean;
}
