import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
// import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private behave = new BehaviorSubject<any>({textVal: ''});

  // setBehaviorView(arg0: { textVal: any; }) {
  //   throw new Error("Method not implemented.");
  // }

  constructor() { }

  setBehaviorView(behave: any) {
    this.behave.next(behave);
  }
  getBehaviorView(): Observable<any> {
      return this.behave.asObservable();
  }

}
