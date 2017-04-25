import {
  Component,
  OnInit,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ICourse } from '../courses/course/course.component';
import { CoursesService, IAuthor } from '../courses/courses.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'create-courses',
  styleUrls: ['createCourses.component.scss'],
  templateUrl: 'createCourses.component.html'
})
export class CreateCoursesComponent implements OnInit, OnDestroy {
  course: ICourse = <ICourse> {};
  createForm: FormGroup;
  subscription: ISubscription;
  authors: IAuthor[];

  constructor(public cs: CoursesService, public fb: FormBuilder, private cd: ChangeDetectorRef) {
    this.createForm = fb.group({
      title: [null, Validators.compose([Validators.required, Validators.maxLength(50)])],
      description: [null, Validators.compose([Validators.required, Validators.maxLength(500)])],
      date: [null, Validators.compose([Validators.required])],
      duration: [null, Validators.compose([Validators.required, Validators.pattern(/^\d+$/)])],
      authors: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.subscription = this.cs.authors.subscribe((result: IAuthor[]) => {
      this.authors = result;
      this.cd.markForCheck();
    });
    this.cs.getAuthors();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    console.log('This details will be send to server: ', this.createForm.value);
  }
}
