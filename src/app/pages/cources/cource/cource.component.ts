import {
  Component,
  Input
} from '@angular/core';

export interface ICource {
  title: string;
  date: string;
  duration: string;
  content: string;
}

@Component({
  selector: 'cource',
  styleUrls: [ './cource.component.scss' ],
  templateUrl: './cource.component.html'
})
export class CourceComponent {
  @Input() public cource: ICource;
}
