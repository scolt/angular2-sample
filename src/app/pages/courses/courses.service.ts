import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICourse } from './course/course.component';
import { HttpService } from '../../common/services/http.service';
import { URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

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
  public courses: Subject<ICoursesListResponse> = new Subject<ICoursesListResponse>();
  public authors: Subject<IAuthor[]> = new Subject<IAuthor[]>();

  private params: ICoursesListParams = {
    page: 1,
    count: 5,
    search: ''
  };

  constructor(private router: Router, private http: HttpService) {}

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
      .subscribe((result: IAuthor[]) => this.authors.next(result));
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
        this.courses.next(result);
      });
  }

  getItemById(id: string) {
    let params = new URLSearchParams();
    params.set('id', id);
    this.getList(params);
  }

  save(course: ICourse) {
    console.log(course);
    this.router.navigateByUrl('/');
  }

  remove(id: string) {
    let params = new URLSearchParams();
    params.set('id', id);
    this.http.get('/courses/delete', {search: params})
      .map((result) => result.json())
      .subscribe(this.getList.bind(this));
  }
}
