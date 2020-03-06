import { Component, OnInit } from '@angular/core';
import { BloggDataService } from '../blogg-data.service';
import { ArticleInterface } from '../article-interface';

@Component({
  selector: 'app-latest-article',
  templateUrl: './latest-article.component.html',
  styleUrls: ['./latest-article.component.css']
})
export class LatestArticleComponent implements OnInit {
  articles: ArticleInterface[];

  constructor(public bloggDataService: BloggDataService) { }

  ngOnInit(): void {
    console.log("vår lista",this.bloggDataService.articles);
    this.articles = this.bloggDataService.articles;
    
    
  }

}
