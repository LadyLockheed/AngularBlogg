import { Component, OnInit } from '@angular/core';
import { BloggDataService } from '../blogg-data.service';
import { ArticleInterface } from '../article-interface';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {
  articles: ArticleInterface[];
  displayDeleteButton: boolean;
  articleToBeRemoved; // Bara rubrik

  deleteArticleButton(article){
    this.articleToBeRemoved = article;
    this.bloggDataService.deleteArticle(this.articleToBeRemoved);
    this.articles = this.bloggDataService.getAllArticles();
  }

  constructor(public bloggDataService: BloggDataService, public loginService: LoginService) { }

  ngOnInit(): void {
    this.articles = this.bloggDataService.getAllArticles();
    this.loginService.getValue().subscribe((value)=> {
      this.displayDeleteButton=value;
    });
  }
  

}
