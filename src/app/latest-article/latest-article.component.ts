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
  noTime:number;

  ngOnInit(): void {
    this.latestArticles = this.bloggDataService.getFiveLatestArticles();
    
    for (let i=0; i<5; i++){
      console.log("lästid första artikeln i listan: ",this.latestArticles[i].time);
    }
    


    console.log("vår fullständiga lista",this.bloggDataService.articles);
    console.log("vår fem senaste", this.latestArticles);

  
    
    
  }

}
