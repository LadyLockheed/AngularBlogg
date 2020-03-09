import { Component, OnInit } from '@angular/core';
import { BloggDataService } from '../blogg-data.service'

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  constructor(public bloggDataService:BloggDataService) { }

  ngOnInit(): void {
  }


  newRubrik:string;
  newName: string;
  readingTime: number;
  newStory:string;

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
    console.log("Addarticle funkar");

    //TODO När man klickar på addarticle ska formulärsfälten tömmas
    this.bloggDataService.saveNewArticle(this.newRubrik, this.newName, this.readingTime, this.newStory)
    
  }

}
