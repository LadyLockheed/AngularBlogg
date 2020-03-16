import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

displayLogOut:boolean;
displayLogin:boolean=true;
loginOrOut:string;


loginButton(){
  this.loginOrOut = "Du är inloggad :)"
  this.displayLogin=false;
  this.displayLogOut=true;
  this.loginService.setValue(true);
  
}

logOutButton(){
  this.loginOrOut = "Du är utloggad, välkommen tillbaka!"
  this.displayLogOut=false;
  this.displayLogin=true;
  this.loginService.setValue(false);

}

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getValue().subscribe((value)=> {
      this.displayLogOut=value;})
      if (this.displayLogOut == true){
        this.displayLogin=false;
        this.loginOrOut = "Du är inloggad :)"
      }
      else{
        this.loginOrOut = "Logga in"
      }
  }

}
