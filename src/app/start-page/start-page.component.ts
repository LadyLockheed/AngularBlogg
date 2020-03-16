import { Component, OnInit } from '@angular/core';
import { BloggDataService } from '../blogg-data.service';
import { ArticleInterface } from '../article-interface';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  latestArticle: ArticleInterface; 

  constructor(public bloggDataService: BloggDataService) { }

  ngOnInit(): void {
    this.latestArticle = this.bloggDataService.getLatestArticle();
    
  }

}
