import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: 'behavior-subject.component.html'
})

export class BehaviorSubjectComponent implements OnInit {
  myBehaviorSubject$;
  ngOnInit() {
    console.log('2.4 Behavior Subject Start--------------');
    this.myBehaviorSubject$ = new BehaviorSubject(200);
    this.myBehaviorSubject$.subscribe(value => console.log(`First subscription ${value}`));
    this.myBehaviorSubject$.next(1);
    this.myBehaviorSubject$.next(2);
    this.myBehaviorSubject$.subscribe(value => console.log(`Second subscription ${value}`));
    this.myBehaviorSubject$.next(3);
  }
}
