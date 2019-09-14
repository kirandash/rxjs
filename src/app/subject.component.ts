import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: 'subject.component.html'
})
export class SubjectComponent implements OnInit {
  mySubject$;
  ngOnInit() {
    console.log('2.3 Subject Component Start');
    this.mySubject$ = new Subject();
    this.mySubject$.subscribe(value => console.log('First subscription ' + value)); // will log all values following it (1,2,3)
    this.mySubject$.next(1);
    this.mySubject$.next(2);
    // this.mySubject$.complete();
    /* this.mySubject$.unsubscribe(); Always prefer unsubscribe over complete(). Both will not allow any further subscription but unsubscribe() will throw error thus better idea */
    this.mySubject$.subscribe(value => console.log('Second subscription ' + value)); // will log all values following it (3)
    this.mySubject$.next(3);
  }
}
