import { Injectable } from '@angular/core';
import { ArticleInterface } from './article-interface';

@Injectable({
  providedIn: 'root'
})
export class BloggDataService {
  articles: ArticleInterface[] = [
    {rubrik: "Sommar",
    story: "I sommar ska jag och Lisa ut och resa."}
  ];

  


  constructor() { }
}
