import { Component, OnInit } from '@angular/core';
import { BloggDataService } from '../blogg-data.service'
import { AddArticleForm } from '../add-article-form';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  public displayAddArticle:boolean;
  form: AddArticleForm;
  newRubrik:string;
  newName: string;
  readingTime: number;
  newStory:string;
  loginStatus: boolean;

  constructor(public bloggDataService:BloggDataService, public loginService: LoginService) { 
  }

  ngOnInit(): void {
    this.form = new AddArticleForm('', '', null, '');
    this.loginService.getValue().subscribe((value)=> {
      this.loginStatus = value;}) 
  }

  // Bra för felsökning
	getForm() { return JSON.stringify(this.form); }
  // skriv {{diagnostic}} i template för att se modellens värden
  
  // TODO validering så att det blir minst tio tecken
  onKeyUpTitle(event){
    this.newRubrik=event.target.value;
  }

  onKeyUpName(event){
    this.newName = event.target.value;
  }

  onKeyUpReadingTime(event){
    this.readingTime = event.target.value;
  }

  
  onKeyUpStory(event){
    this.newStory=event.target.value;
  }
  addArticle(){
    // skriver ut anonym om man inte skriver in namn
    if(this.newName == undefined){
      this.newName = "Anonym";
    }
    this.bloggDataService.saveNewArticle(this.newRubrik, this.newName, this.readingTime, this.newStory) 
  }

}
