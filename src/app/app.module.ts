import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SubjectComponent } from './subject.component';
import { BehaviorSubjectComponent } from './behavior-subject.component';
import { ReplaySubjectComonent } from './replay-subject.component';
import { OperatorComponent } from './operator.component';
import { DebounceComponent } from './debounce.component';
import { RedditComponent } from './reddit.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComonent,
    OperatorComponent,
    DebounceComponent,
    RedditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
