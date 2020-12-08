import { ITodoRequestSuccsess } from '../../../interfaces/todo/ITodoRequestSuccsess';
import {
  FETCHED_COMPLETE_TODO,
  REQUESTED_COMPLETE_TODO,
  REQUESTED_FAILED_COMPLETE_TODO,
  REQUESTED_SUCCEEDED_COMPLETE_TODO,
} from '../../types/todo/types';

const initialState = {
  data: {},
  loading: false,
  error: false,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: ITodoRequestSuccsess) => {
  switch (action.type) {
    case REQUESTED_COMPLETE_TODO:
      return {
        data: {},
        loading: true,
        error: false,
      };
    case REQUESTED_SUCCEEDED_COMPLETE_TODO:
      return {
        data: {},
        loading: false,
        error: false,
      };
    case REQUESTED_FAILED_COMPLETE_TODO:
      return {
        data: {},
        loading: false,
        error: true,
      };
    case FETCHED_COMPLETE_TODO:
      return {};
    default:
      return state;
  }
};
