import {
  Component
} from '@angular/core';

import { ICource } from './cource/cource.component';

@Component({
  selector: 'cources',
  providers: [],
  styleUrls: [ './cources.component.scss' ],
  templateUrl: './cources.component.html'
})
export class CourcesComponent {
  public cources: ICource[] = [
    {
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
    }
  ];
}
