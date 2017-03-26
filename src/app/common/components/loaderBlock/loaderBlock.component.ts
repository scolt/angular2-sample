import {
  Component
} from '@angular/core';

import { LoaderService } from './loaderBlock.service';

@Component({
  selector: 'loader',
  styleUrls: [ './loaderBlock.component.scss' ],
  templateUrl: './loaderBlock.component.html'
})
export class LoaderBlockComponent {
  constructor(public loaderService: LoaderService) {}
}
