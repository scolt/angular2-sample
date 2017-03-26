import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
  showSubject: Subject<boolean> = new BehaviorSubject<boolean>(false);

  show() {
    this.showSubject.next(true);
  }

  hide() {
    this.showSubject.next(false);
  }
}
