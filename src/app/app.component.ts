import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularBlogg';
  public displayAddArticle:boolean;
  
  //! Denna ska ligga i onInit, men det funkar inte.
  constructor(public loginService:LoginService){
    this.loginService.getValue().subscribe((value)=> {
      this.displayAddArticle=value;
    });
  }

  // nogOnInit(){

    
  // }
}






