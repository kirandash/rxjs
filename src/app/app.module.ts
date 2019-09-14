import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubjectComponent } from './subject.component';
import { BehaviorSubjectComponent } from './behavior-subject.component';
import { ReplaySubjectComonent } from './replay-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComonent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
