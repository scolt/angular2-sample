import { Injectable, ApplicationRef  } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ICourse } from './course/course.component';
import { FilterPipe } from '../../common/pipes/filter.pipe';

let courses = [
  {
    id: '1',
    title: 'Video course One',
    date: (new Date()),
    duration: 88,
    topRated: true,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ut velit eu accumsan. 
      Nunc rutrum varius erat quis dignissim. Vestibulum maximus, nulla nec luctus condimentum, ipsum metus 
      lacinia quam, sit amet rhoncus sem nisl vel nibh. Cras rhoncus tristique mollis. Sed id commodo ex. Vivamus sodales 
      nisi sit amet ex finibus, quis tincidunt est iaculis. Nulla bibendum ligula lectus, sed laoreet nunc venenatis eu.`
  },
  {
    id: '2',
    title: 'Angular Global course X',
    topRated: false,
    duration: 159,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ut velit eu accumsan.
      Nunc rutrum varius erat quis dignissim. Vestibulum maximus, nulla nec luctus condimentum, ipsum metus
      lacinia quam, sit amet rhoncus sem nisl vel nibh. Cras rhoncus tristique mollis. Sed id commodo ex. Vivamus sodales
      nisi sit amet ex finibus, quis tincidunt est iaculis. Nulla bibendum ligula lectus, sed laoreet nunc venenatis eu.`
  },
  {
    id: '3',
    title: 'Short course',
    date: (new Date((new Date().getTime()) - 15 * 24 * 60 * 60 * 1000)),
    duration: 28,
    topRated: false,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ut velit eu accumsan. 
      Nunc rutrum varius erat quis dignissim. Vestibulum maximus, nulla nec luctus condimentum, ipsum metus 
      lacinia quam, sit amet rhoncus sem nisl vel nibh. Cras rhoncus tristique mollis. Sed id commodo ex. Vivamus sodales 
      nisi sit amet ex finibus, quis tincidunt est iaculis. Nulla bibendum ligula lectus, sed laoreet nunc venenatis eu.`
  }
];

@Injectable()
export class CoursesService {
  public courses: BehaviorSubject<ICourse[]> = new BehaviorSubject<ICourse[]>([]);

  constructor(public filterPipe: FilterPipe) {}

  filterByName(query: string) {
    this.courses.next(
      this.filterPipe.transform(courses, 'title', query)
    );
  }

  getList() {
    this.courses.next(courses);
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
      const indexToDelete = courses.findIndex((item) => item.id === id);
      courses = courses.slice();
      courses.splice(indexToDelete, 1);
      this.courses.next(courses);
  }
}
