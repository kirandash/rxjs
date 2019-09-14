import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-operator',
  templateUrl: 'operator.component.html'
})

export class OperatorComponent implements OnInit {
  myObservable$;
  ngOnInit() {
    console.log(`Operators: 3.1 take & interval ==============`);
    this.myObservable$ = interval(1000).pipe(take(5));
    this.myObservable$.subscribe(value => console.log(value));
  }
}
