import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: 'debounce.component.html'
})
export class DebounceComponent implements OnInit {
  searchSubject$ = new Subject();
  ngOnInit() {
    this.searchSubject$.pipe(debounceTime(500)).subscribe(val => console.log(val)); // This will not be called everytime user search something. But will be called only 500ms after user finishes typing. Thus reduces traffic to server.
  }

  inputChanged(data){
    console.log(`Entered text is ${data}`);
    this.searchSubject$.next(data);
  }
}
