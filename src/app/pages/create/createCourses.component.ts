import {
  Component,
  OnInit,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ICourse } from '../courses/course/course.component';
import { CoursesService, IAuthor, ICoursesListResponse } from '../courses/courses.service';
import { ISubscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../../common/services/breadcrumb.service';

@Component({
  selector: 'create-courses',
  styleUrls: ['createCourses.component.scss'],
  templateUrl: 'createCourses.component.html'
})
export class CreateCoursesComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  course: ICourse = <ICourse> {};
  createForm: FormGroup;
  subscriptions: ISubscription[] = [];
  authors: IAuthor[];

  constructor(
    public cs: CoursesService,
    public fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private bs: BreadcrumbService,
    private route: ActivatedRoute) {
    this.createForm = fb.group({
      id: [null],
      title: [null, Validators.compose([Validators.required, Validators.maxLength(50)])],
      description: [null, Validators.compose([Validators.required, Validators.maxLength(500)])],
      date: [null, Validators.compose([Validators.required])],
      duration: [null, Validators.compose([Validators.required, Validators.pattern(/^\d+$/)])],
      authors: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.subscriptions.push(this.cs.authors.subscribe((result: IAuthor[]) => {
      this.authors = result;
      this.cd.markForCheck();
    }));
    this.subscriptions.push(this.cs.courses.subscribe((result: ICoursesListResponse) => {
      const course: ICourse = result.courses[0];
      Object.keys(course).forEach((key: string) => {
        if (this.createForm.controls[key]) {
          this.createForm.controls[key].patchValue(course[key]);
        }
      });
      this.bs.push({
        title: course.title,
        path: ''
      });
      this.loading = false;
    }));

    this.route.params.subscribe((params: any) => {
      if (params.id === 'new') {
        this.loading = false;
      } else {
        this.cs.getItemById(params.id);
      }
    });
    this.cs.getAuthors();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((item: ISubscription) => item.unsubscribe());
  }

  onSubmit() {
    this.cs.save(this.createForm.value);
  }
}
