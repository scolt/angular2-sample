import {
  Component,
  OnInit
} from '@angular/core';

import { ICourse } from './course/course.component';

@Component({
  selector: 'cources',
  providers: [],
  styleUrls: ['courses.component.scss'],
  templateUrl: 'courses.component.html'
})
export class CourcesComponent implements OnInit {
  public courses: ICourse[] = [];

  public ngOnInit() {
    this.courses.push({
        title: 'Video Cource One',
        date: (new Date()).toString().split(' G')[0],
        duration: '1h 28m',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ut velit eu accumsan. 
      Nunc rutrum varius erat quis dignissim. Vestibulum maximus, nulla nec luctus condimentum, ipsum metus 
      lacinia quam, sit amet rhoncus sem nisl vel nibh. Cras rhoncus tristique mollis. Sed id commodo ex. Vivamus sodales 
      nisi sit amet ex finibus, quis tincidunt est iaculis. Nulla bibendum ligula lectus, sed laoreet nunc venenatis eu.`
      },
      {
        title: 'Angular Global Cource X',
        date: (new Date()).toString().split(' G')[0],
        duration: '2h 39m',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ut velit eu accumsan. 
      Nunc rutrum varius erat quis dignissim. Vestibulum maximus, nulla nec luctus condimentum, ipsum metus 
      lacinia quam, sit amet rhoncus sem nisl vel nibh. Cras rhoncus tristique mollis. Sed id commodo ex. Vivamus sodales 
      nisi sit amet ex finibus, quis tincidunt est iaculis. Nulla bibendum ligula lectus, sed laoreet nunc venenatis eu.`
      },
      {
        title: 'Short Cource',
        date: (new Date()).toString().split(' G')[0],
        duration: '28m',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ut velit eu accumsan. 
      Nunc rutrum varius erat quis dignissim. Vestibulum maximus, nulla nec luctus condimentum, ipsum metus 
      lacinia quam, sit amet rhoncus sem nisl vel nibh. Cras rhoncus tristique mollis. Sed id commodo ex. Vivamus sodales 
      nisi sit amet ex finibus, quis tincidunt est iaculis. Nulla bibendum ligula lectus, sed laoreet nunc venenatis eu.`
      });
  }
}
