import { Component, OnInit } from '@angular/core';
import { BloggDataService } from '../blogg-data.service'
import { AddArticleForm } from '../add-article-form';


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
  articleIsAdded:boolean=false;

  constructor(public bloggDataService:BloggDataService) { 
  }

  ngOnInit(): void {
    this.form = new AddArticleForm('', '', null, ''); 
  }

  // Bra för felsökning
	getForm() { return JSON.stringify(this.form); }
  // skriv {{diagnostic}} i template för att se modellens värden
  
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
    this.articleIsAdded=true;
  }

  



}
