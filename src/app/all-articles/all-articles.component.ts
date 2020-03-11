import { Component, OnInit } from '@angular/core';
import { BloggDataService } from '../blogg-data.service';
import { ArticleInterface } from '../article-interface';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {
  articles: ArticleInterface[];
  displayDeleteButton: boolean = true;

  constructor(public bloggDataService: BloggDataService) { }

  ngOnInit(): void {
    this.articles = this.bloggDataService.getAllArticles();
  }

}
