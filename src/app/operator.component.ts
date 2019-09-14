import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-operator',
  templateUrl: 'operator.component.html'
})

export class OperatorComponent implements OnInit {
  myNumsObservable$;
  myLettersObservable$;
  mergedObservable$;
  ngOnInit() {
    console.log(`Operators: 3.1 take & interval ==============`);
    this.myNumsObservable$ = interval(500).pipe(take(5)).pipe(map(x => x * 10)).pipe(filter(x => x < 20));
    this.myNumsObservable$.subscribe(value => console.log('Numbers observable: ' + value));
    console.log('3.4 mergeMap & of');
    this.myLettersObservable$ = of('a', 'b', 'c', 'd', 'e', 'f', 'g');
    this.mergedObservable$ = this.myLettersObservable$.pipe(mergeMap((letter: any) =>
      this.myNumsObservable$.pipe(map((mynum: any) => {
        return letter + mynum;
      }))
    )).subscribe(value => console.log(value));
  }
}
