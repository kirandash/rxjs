import { Component, OnInit, OnDestroy } from '@angular/core';
// import * from 'rxjs'; // Don't import the whole rxjs library since it is huge
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rxjs';
  search: string;
  myobservable$; // Good practice to end your observables with $
  ngOnInit() {
    this.myobservable$ = Observable.create((observer) => {
      observer.next(1); // sending a value of 1 and keeps listening
      observer.next(2); // sending a value of 2 and keeps listening
      observer.next(3); // with next(), observer() will keep listening for updates
      observer.complete(); // observer.complete() or .error() means observable will no logner listen to any updates
    });
    this.myobservable$.subscribe(value => {
      console.log(value); // value received
    }, error => {
      console.log(error);
    }, () => {
      console.log('End of observable'); // This will get called only if observer.complete() is called
    });

    // 4.1 Create observable from a button
    fromEvent(document, 'click').subscribe(x => console.dir(x));
  }

  ngOnDestroy() {
    this.myobservable$.unsubscribe();
  }
}
