import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[highlight]' })
export class HighlightDirective implements OnInit {
  @Input() date: any;

  constructor(public el: ElementRef) {}

  ngOnInit() {
    let createdDate = new Date(this.date).getTime();
    let currentDate = new Date().getTime();
    let twoWeeksAgo = (new Date()).getTime() - 14 * 24 * 60 * 60 * 1000;

    if (createdDate < currentDate && createdDate >= twoWeeksAgo) {
      this.el.nativeElement.className += ' new';
    } else if (!createdDate) {
      this.el.nativeElement.className += ' coming-soon';
    }
  }
}
