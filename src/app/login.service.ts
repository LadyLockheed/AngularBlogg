import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  
  private routerInfo: BehaviorSubject<boolean>;

  constructor() { 
    
    this.routerInfo=new BehaviorSubject<boolean>(false)
  
  }

  getValue():Observable<boolean>{
    return this.routerInfo.asObservable(); 
  }

  setValue(newValue):void{

    this.routerInfo.next(newValue)
  }

}
