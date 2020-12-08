import { ITodoRequestSuccsess } from '../../../interfaces/todo/ITodoRequestSuccsess';
import {
  FETCHED_DONE_TODOS,
  REQUESTED_SUCCEEDED_DONE_TODOS,
  REQUESTED_FAILED_DONE_TODOS,
  REQUESTED_DONE_TODOS,
} from '../../types/todo/types';

const initialState = {
  data: [],
  loading: false,
  error: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: ITodoRequestSuccsess) => {
  switch (action.type) {
    case REQUESTED_DONE_TODOS:
      return {
        data: [],
        loading: true,
        error: false,
      };
    case REQUESTED_SUCCEEDED_DONE_TODOS:
      return {
        data: action.data,
        loading: false,
        error: false,
      };
    case REQUESTED_FAILED_DONE_TODOS:
      return {
        data: [],
        loading: false,
        error: true,
      };
    case FETCHED_DONE_TODOS:
      return [];
    default:
      return state;
  }
};
