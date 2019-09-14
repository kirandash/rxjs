import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: 'replay-subject.component.html'
})

export class ReplaySubjectComonent implements OnInit {
  myReplaySubject$;
  ngOnInit() {
    console.log('Replay Subject Start ----------');
    this.myReplaySubject$ = new ReplaySubject();
    this.myReplaySubject$.subscribe(value => console.log(`First subscription ${value}`));
    this.myReplaySubject$.next(1);
    this.myReplaySubject$.next(2);
    this.myReplaySubject$.subscribe(value => console.log(`Second subscription ${value}`));
    this.myReplaySubject$.next(3);
  }
}
