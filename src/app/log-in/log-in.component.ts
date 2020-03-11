import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

loginButton(){

  console.log("Logga in knappen funkar");
  
  this.loginService.setValue(true);
}

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {


  }

}
