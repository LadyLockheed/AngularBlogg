import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logInOrOut: string;
  
  private routerInfo: BehaviorSubject<boolean>;


  constructor() { 
    
    this.routerInfo=new BehaviorSubject<boolean>(false)
  
  }

  getValue():Observable<boolean>{
    return this.routerInfo.asObservable(); 
  }

  setValue(newValue):void{
    console.log("Nu är vi i setvalue i service");
    console.log("Och detta är vad som skickas från login: ", newValue);
    
    this.routerInfo.next(newValue)
  }
}
