import {
  Action
} from '@ngrx/store';

import {
  Author
} from '../models/authors.model';

export const defaultState = [];

export const GET_AUTHORS = 'get-authors';

export default function authorReducer(state: Author[] = defaultState, action: Action) {
  if (action.type === GET_AUTHORS) {
    return action.payload;
  }

  return state;
}
