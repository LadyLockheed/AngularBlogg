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
  newStory:string;

  // TODO validering så att det blir minst tio tecken
  onKeyUpTitle(event){
    this.newRubrik=event.target.value;

  }

  onKeyUpStory(event){
    this.newStory=event.target.value;

  }

  addArticle(){
    console.log("Addarticle funkar");

    //TODO När man klickar på addarticle ska formulärsfälten tömmas
    this.bloggDataService.SaveNewArticle(this.newRubrik, this.newStory)
    
  }

}
