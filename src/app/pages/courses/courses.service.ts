import { Injectable } from '@angular/core';
import { ICourse } from './course/course.component';
import { HttpService } from '../../common/services/http.service';
import { URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { GET_COURSES } from '../../common/reducers/course.reducer';
import { GET_AUTHORS } from '../../common/reducers/author.reducer';

export interface ICoursesListParams {
  page: number;
  count: number;
  search: string;
}

export interface IAuthor {
  id: number;
  firstName: string;
  lastName: string;
}

export interface ICoursesListResponse {
  totalPages: number;
  courses: ICourse[];
}

@Injectable()
export class CoursesService {

  private params: ICoursesListParams = {
    page: 1,
    count: 5,
    search: ''
  };

  constructor(private router: Router,
              private http: HttpService,
              private store: Store<any>) {}

  setPage(page: number) {
    this.params.page = page;
    this.getList();
  }

  filterByName(query: string) {
    this.params.search = query;
    this.params.page = 1;
    this.getList();
  }

  getAuthors() {
    this.http.get('/courses/authors')
      .map((res) => res.json())
      .subscribe((result: IAuthor[]) => this.store.dispatch({
        type: GET_AUTHORS,
        payload: result
      }));
  }

  getList(params = null) {
    if (!params) {
      params = new URLSearchParams();
      params.set('start', ((this.params.page - 1) * this.params.count).toString());
      params.set('count', this.params.count.toString());
      params.set('search', this.params.search);
    }

    this.http.get('/courses', {search: params})
      .map((res) => {
        const result = res.json();
        result.courses = result.courses.map((item) => {
          item.duration = item.length;
          item.title = item.name;
          delete item.length;
          delete item.name;
          return item;
        });

        return result;
      })
      .subscribe((result: ICoursesListResponse) => {
        this.store.dispatch({
          type: GET_COURSES,
          payload: result
        });
      });
  }

  getItemById(id: string) {
    let params = new URLSearchParams();
    params.set('id', id);
    this.getList(params);
  }

  save(course: ICourse) {
    this.router.navigateByUrl('/');
  }

  remove(id: string) {
    let params = new URLSearchParams();
    params.set('id', id);
    this.http.get('/courses/delete', {search: params})
      .map((result) => result.json())
      .subscribe(this.getList.bind(this, undefined));
  }
}
