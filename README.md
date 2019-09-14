# RxJS

## 1. Intro - Asynchronous and Reactive Programming
Helps handling Real time interactions across multiple devices. Eg: Updates, Analytics, Data.
Created by Ben

### 1.1 Evolution of asynchronous programming
1. Asynchronous: code executes in the background. But where to write dependent codes?
2. Callbacks are used to write codes that are dependent on async calls. But callback hells.
3. Promises: Cleaner coding. Chaining. resolve, reject, then(). But how to handle realtime data? Promises can be used but only once. Once then() method executes it won't listen to changes anymore.
4. Observable: An observable is basically a reusable promise which keeps listening for updates even after the then method executes. .subscribe() <==> .then()
Observable helps to listen to real time updates and respond.

### 1.2 The observer pattern
1. Gang of Four: Design patterns, book for OO design by Christopher Alexander
2. 23 design patterns created by developers for web applications.
3. Observer pattern is one of them.
4. Observer patterns is a software design pattern in which an object called Subject maintains a list of all it's dependents or Observers and notifies them automatically of any state changes usually by calling them one of their methods.
Also called a Event Driven Design pattern.

### 1.3 Explore the ReactiveX website
http://reactivex.io/
1. Debounce method: will wait for a specific amount of time in b/w events. E.g instead of hitting server on every letter we type in search bar, we can use debounce method to hit server every 0.5s. Better performance. Reduces traffic.
2. Marvel diagram: before debounce ---> debounce method ---> after debounce
https://rxjs.dev/

### 1.4 Database observables
Data is nothing but a stream of events/updates.

## 2. Project Setup
### 2.1 Angular project setup
ng new rxjs --directory ./
ng serve

### 2.2 Create an observable
1. import { Observable } from 'rxjs';
2. $ at end of observable variables myobservable$.
3. Observable.create
4. observer.next(), observer.error(), observer.complete()
5. myobservable$.subscribe(value => {}, err=> {}, () => {})
6. myobservable$.unsubsribe

### 2.3 Subject - creation
1. observer contains 3 methods - next, error, complete.
2. Observable is an outer wrapper that listens to updates from an observer.
3. Each observable will have it's own set of observers and can't be shared. Also observers cant interact with each other.
4. A subject is both an observer and observable. It allows us to access observer from outside of observable.
5. It will receive values from all next statements executed after the call.
6. import { Subject } from 'rxjs';
7. this.mySubject$ = new Subject();
8. this.mySubject$.subscribe

### 2.4 Behavior Subject
A behavior subject is a subject / observable which takes an initial value or the most recent value.
1. import { BehaviorSubject } from 'rxjs';
2. this.myBehaviorSubject$ = new BehaviorSubject(200);

### 2.5 Replay subject
This gets all the values that we have passed to a subject since the beginning. This will save all the values and pass to all new subscription.
1. this.myReplaySubject$ = new ReplaySubject();

## 3. Operators
Operators helpls us to modify an observable without unwrapping it.
### 3.1 take & interval
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
1. take first n number of values from observable.
2. this.myObservable$ = interval(1000).pipe(take(5));

### 3.2 map
map operator helps us modify the value from payload.
this.myObservable$ = interval(500).pipe(take(5)).pipe(map(x => x * 10));

### 3.3 filter
filtes data from payload.
this.myObservable$ = interval(500).pipe(take(5)).pipe(map(x => x * 10)).pipe(filter(x => x < 20));
