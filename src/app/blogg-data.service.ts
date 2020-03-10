import { Injectable } from '@angular/core';
import { ArticleInterface } from './article-interface';

@Injectable({
  providedIn: 'root'
})
export class BloggDataService {
  
  newArticle; 
  latestArticles: ArticleInterface[]; // kopia av lista
  
  articles: ArticleInterface[] = [
    {rubrik: "Sommar", author: "Hanna", time: 3, 
    story: "I sommar ska jag och Lisa ut och resa."},
    {rubrik: "Min iller", author: "Lisa", time: 10,
    story: "Min iller är den bästa som finns i världen."},
    {rubrik: "Svamp!", author: "Greta", time: 19,
    story: "Skitmysigt att gå i skogen och plocka svamp till sin svampmacka."},
    {rubrik: "Harry Potter Maraton", author: "Johan", time: 21,
    story: "Bästa filmkvällen på länge. Började på fredag, slutade på måndag."},
    {rubrik: "Skolan", author: "Johanna", time: 4,
    story: "Det bästa jag gjort är att säga upp mig och börja plugga till frontendutvecklare"},
    {rubrik: "Godiscravings", author: "Karl", time: 9,
    story: "Är sjukt sugen på godis. Önskar jag var Pippi Långstrump med ett guldmynt, hade köpt hela 4gott."},
    {rubrik: "Äntligen helg!", author: "Jonas", time: 34,
    story: "Längtat efter fredagen och helgen. Ska bli så skönt!"}
  ];

  getFiveLatestArticles(): ArticleInterface[] { // skicka till latestArticle comp - this.latestArticle = latestArticles();
    return this.articles.slice(0, 5);
    /* return this.articles.slice(-5); */ // sista elementet i listan
  }

  getLatestArticle(): ArticleInterface {
    console.log('service getLatestArt all articles', this.articles);
    
    /* return this.articles[this.articles.length-1] */
    return this.articles[0];
  }

  getAllArticles(){
    return this.articles;
  }

 saveTitle(){
  //? Behöver vi spara titeln separat som en sträng? Eventuellt tas denna funktionen bort.
 }

 saveStory(){
  //? Behöver vi spara storyn separat som en sträng? Eventuellt tas denna funktionen bort.
 }


  //sparar den nya artikeln och lägger till den i defaultlistan
 saveNewArticle(headline:string, name:string, minutes: number, storyText:string){
  
  this.newArticle = {rubrik:headline, author: name, time: minutes, story: storyText};

  this.articles.unshift(this.newArticle);
  
  console.log("Artikellistan efter pushad ny artikel: ", this.articles);
}

  constructor() {}
}
