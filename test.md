# RxJS

## 1. Intro - Asynchronous and Reactive Programming
Helps handling Real time interactions across multiple devices. Eg: Updates, Analytics, Data.

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
### 2.1 
