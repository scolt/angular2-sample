import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICourse } from './course/course.component';
import { FilterPipe } from '../../common/pipes/filter.pipe';
import { HttpService } from '../../common/services/http.service';
import { URLSearchParams } from '@angular/http';

export interface ICoursesListParams {
  page: number;
  count: number;
  search: string;
}

export interface ICoursesListResponse {
  totalPages: number;
  courses: ICourse[];
}

@Injectable()
export class CoursesService {
  public courses: Subject<ICoursesListResponse> = new Subject<ICoursesListResponse>();
  private params: ICoursesListParams = {
    page: 1,
    count: 5,
    search: ''
  };

  constructor(public filterPipe: FilterPipe, private http: HttpService) {
  }

  setPage(page: number) {
    this.params.page = page;
    this.getList();
  }

  filterByName(query: string) {
    this.params.search = query;
    this.params.page = 1;
    this.getList();
  }

  getList() {
    let params = new URLSearchParams();
    params.set('start', ((this.params.page - 1) * this.params.count).toString());
    params.set('count', this.params.count.toString());
    params.set('search', this.params.search);

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

  create() {
    console.log('create, not implemented yet');
  }

  getItemId(id: string) {
    console.log('getItemId, not implemented yet');
  }

  update(id: string) {
    console.log('update, not implemented yet');
  }

  remove(id: string) {
    console.log('remove, not implemented yet');
    // const indexToDelete = courses.findIndex((item) => item.id === id);
    // courses = courses.slice();
    // courses.splice(indexToDelete, 1);
    // this.courses.next(courses);
  }
}
