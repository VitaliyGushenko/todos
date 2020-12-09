export interface ITodo {
  key?: string;
  completed?: boolean;
  todo?: string;
  userName?: string;
  userUid?: string;
  dateCompleted?: any;
}

export interface ITodoCompleatedDeleted {
  type: string;
  todo: string;
}

export interface ITodoFilter {
  type: string;
  filter: string;
  value?: string;
}

export interface ITodoKey {
  key: string;
  todosInfo: ITodo;
}
