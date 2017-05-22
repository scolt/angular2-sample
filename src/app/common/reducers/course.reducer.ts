import {
  Action
} from '@ngrx/store';

import {
  CourseModel
} from '../models/course.model';

export const defaultState = {
  totalPages: 0,
  courses: []
};

export const GET_COURSES = 'get-courses';

export default function courseReducer(state: CourseModel = defaultState, action: Action) {
  if (action.type === GET_COURSES) {
    return action.payload;
  }

  return state;
}
