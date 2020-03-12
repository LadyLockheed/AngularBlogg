import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularBlogg';
  public displayAddArticle:boolean;
  loggInOrOut:string="Logga in";
  
  constructor(public loginService:LoginService){
   
  }

  ngOnInit(){

    this.loginService.getValue().subscribe((value)=> {
      this.displayAddArticle=value;
      if (this.displayAddArticle==true){
        this.loggInOrOut="Logga ut"
       
      }
      else{
        this.loggInOrOut="Logga in"
      }
  
    });
  }
}






