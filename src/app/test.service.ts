import { HttpClient } from '@angular/common/http'

export class TestService3 {
  sayHello() {
    console.log(`From TestService3 --> Hello`);
  }
}

export function xyzFactory(http: HttpClient){
  console.log(!!http);
  return new TestService3();
}

// for useExisting
@Injectable({
  providedIn: 'root'
})
// for useClass, comment above decorator
export class TestService2{
  sayHello(){
      console.log('From TestService2 --> Hello');
    }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',

  //useClass: TestService2

  //useFactory: xyzFactory,
  //deps: [HttpClient]

  // useValue: {
  //   sayHello: function(){
  //     console.log('Hello from useValue function');
  //   }
  // }
  useExisting: TestService2
})
export class TestService {

  constructor() { }

  sayHello(){
    console.log('From TestService --> Hello');
  }
}