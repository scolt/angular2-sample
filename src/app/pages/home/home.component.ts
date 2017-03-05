import {
  Component
} from '@angular/core';

@Component({
  selector: 'home',
  providers: [],
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public image: string = 'assets/img/course-image.jpg';
}
