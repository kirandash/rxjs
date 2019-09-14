import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-reddit',
  templateUrl: 'reddit.component.html',
  styles: ['img {width: 100px}']
})

export class RedditComponent implements OnInit {
  searchString: string;
  results$;
  searchSubject$;
  constructor(public http: HttpClient) {

  }

  ngOnInit() {
    this.searchSubject$ = new Subject<string>();
    this.results$ = this.searchSubject$.pipe(debounceTime(500)).pipe(distinctUntilChanged()).pipe(switchMap(x => this.queryApi(x)));
    // .pipe(take(2)) will allow to search only twice - not usable here.
  }

  queryApi(string) {
    return this.http.get(`https://www.reddit.com/r/aww/search.json?q=${string}`).pipe(map(result => result['data']['children'])); // http calls returns an observable
  }

  searchChange(data) {
    this.searchSubject$.next(data);
  }
}
