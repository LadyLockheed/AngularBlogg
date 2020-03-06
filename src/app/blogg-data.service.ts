import { Injectable } from '@angular/core';
import { ArticleInterface } from './article-interface';

@Injectable({
  providedIn: 'root'
})
export class BloggDataService {
  articles: ArticleInterface[] = [
    {rubrik: "Sommar",
    story: "I sommar ska jag och Lisa ut och resa."},
    {rubrik: "Min iller",
    story: "Min iller är den bästa som finns i världen."},
    {rubrik: "Svamp!",
    story: "Skitmysigt att gå i skogen och plocka svamp till sin svampmacka."},
    {rubrik: "Harry Potter Maraton",
    story: "Bästa filmkvällen på länge. Började på fredag, slutade på måndag."},
    {rubrik: "Skolan",
    story: "Det bästa jag gjort är att säga upp mig och börja plugga till frontendutvecklare"},
    {rubrik: "Godiscravings",
    story: "Är sjukt sugen på godis. Önskar jag var Pippi Långstrump med ett guldmynt, hade köpt hela 4gott."},
    {rubrik: "Äntligen helg!",
    story: "Längtat efter fredagen och helgen. Ska bli så skönt!"}
  ];

  


  constructor() { }
}
