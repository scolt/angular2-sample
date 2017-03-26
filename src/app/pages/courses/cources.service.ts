import { Injectable, ApplicationRef  } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ICourse } from './course/course.component';

@Injectable()
export class CoursesService {
  public courses: Subject<ICourse[]> = new BehaviorSubject<ICourse[]>([]);

  getList() {
    this.courses.next([
      {
        id: '1',
        title: 'Video Cource One',
        date: (new Date()).toString().split(' G')[0],
        duration: '1h 28m',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ut velit eu accumsan. 
      Nunc rutrum varius erat quis dignissim. Vestibulum maximus, nulla nec luctus condimentum, ipsum metus 
      lacinia quam, sit amet rhoncus sem nisl vel nibh. Cras rhoncus tristique mollis. Sed id commodo ex. Vivamus sodales 
      nisi sit amet ex finibus, quis tincidunt est iaculis. Nulla bibendum ligula lectus, sed laoreet nunc venenatis eu.`
      },
      {
        id: '2',
        title: 'Angular Global Cource X',
        date: (new Date()).toString().split(' G')[0],
        duration: '2h 39m',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ut velit eu accumsan.
      Nunc rutrum varius erat quis dignissim. Vestibulum maximus, nulla nec luctus condimentum, ipsum metus
      lacinia quam, sit amet rhoncus sem nisl vel nibh. Cras rhoncus tristique mollis. Sed id commodo ex. Vivamus sodales
      nisi sit amet ex finibus, quis tincidunt est iaculis. Nulla bibendum ligula lectus, sed laoreet nunc venenatis eu.`
      },
      {
        id: '3',
        title: 'Short Cource',
        date: (new Date()).toString().split(' G')[0],
        duration: '28m',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ut velit eu accumsan. 
      Nunc rutrum varius erat quis dignissim. Vestibulum maximus, nulla nec luctus condimentum, ipsum metus 
      lacinia quam, sit amet rhoncus sem nisl vel nibh. Cras rhoncus tristique mollis. Sed id commodo ex. Vivamus sodales 
      nisi sit amet ex finibus, quis tincidunt est iaculis. Nulla bibendum ligula lectus, sed laoreet nunc venenatis eu.`
      }
    ]);
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
      const indexToDelete = this.courses['value'].findIndex((item) => item.id === id);
      let newValue = this.courses['value'].slice();
      newValue.splice(indexToDelete, 1);
      this.courses.next(newValue);
  }
}
