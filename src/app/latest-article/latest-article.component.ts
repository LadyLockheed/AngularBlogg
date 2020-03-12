import { Component, OnInit } from '@angular/core';
import { BloggDataService } from '../blogg-data.service';
import { ArticleInterface } from '../article-interface';

@Component({
  selector: 'app-latest-article',
  templateUrl: './latest-article.component.html',
  styleUrls: ['./latest-article.component.css']
})
export class LatestArticleComponent implements OnInit {
  latestArticles: ArticleInterface[];

  constructor(public bloggDataService: BloggDataService) { }
  

  ngOnInit(): void {
    this.latestArticles = this.bloggDataService.getFiveLatestArticles();
    


    //TODO Karins att göra. Fixa så att om det inte finns nån tid (undefined) att den inte skriver ut den templaten. Går ju inte!!! Möjligtvis skicka med eget defaultvärde, men det måste vara i number.Om det hade varit string hade man kunnat skriva in "okänt antal"(minuter)
  //   noTime:number;
  // thereIsNoTime:string;
    // for (let i=0; i<5; i++){
     
    //   console.log("Tiden är: ", this.latestArticles[i].time);
      
    //    if(this.latestArticles[i].time==undefined){
    //     this.thereIsNoTime="Okänt antal ";
    //     }
    //    else{
    //      this.thereIsNoTime="";
    //    }
    //   console.log("lästid första artikeln i listan: ",this.latestArticles[i].time);
    // }
      

      
     
      
     
    
    


    console.log("vår fullständiga lista",this.bloggDataService.articles);
    console.log("vår fem senaste", this.latestArticles);

  
    
    
  }

}
