import {
  Action
} from '@ngrx/store';

import {
  UserModel
} from '../models/user.model';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const defaultState = {
  userInfo: undefined,
  err: undefined,
  loggedIn: false
};

export default function authReducer(state: UserModel = defaultState, action: Action) {
  if (action.type === LOG_IN) {
    return {
      userProfile: action.payload,
      err: undefined,
      loggedIn: true
    };
  }

  if (action.type === LOG_OUT) {
    return {
      userProfile: undefined,
      err: undefined,
      loggedIn: false
    };
  }

  return state;
}
