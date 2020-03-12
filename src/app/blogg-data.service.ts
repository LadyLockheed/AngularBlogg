import { Injectable } from '@angular/core';
import { ArticleInterface } from './article-interface';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloggDataService {
  
  newArticle; 
  latestFiveArticles: ArticleInterface[]; // kopia av lista
  articleStory: string;

  
  
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

  // Visar de fem senaste artiklarna
  getFiveLatestArticles(): ArticleInterface[] { // skicka till latestArticle comp - this.latestArticle = latestArticles();
    this.latestFiveArticles = this.articles.slice(0, 5);
  
    
    let latestFiveShortPreview =this.latestFiveArticles.map(element=>({
      rubrik:element.rubrik,
      author:element.author,
      time:element.time,
      story:element.story.substring(0,30)
    }))
    console.log("Slicad och kapad: ", this.latestFiveArticles);
    
   
    return latestFiveShortPreview;
    /* return this.articles.slice(-5); */ // sista elementet i listan
  }

  // Visar senaste artiklen på startsidan
  getLatestArticle(): ArticleInterface {
    console.log('service getLatestArt all articles', this.articles);
    

    /* return this.articles[this.articles.length-1] */
    return this.articles[0];
  }
  // Visar alla artiklar
  getAllArticles(){
    return this.articles;
  }

  // Sparar den nya artikeln och lägger till den i defaultlistan
 saveNewArticle(headline:string, name:string, minutes: number, storyText:string){
  
  this.newArticle = {rubrik:headline, author: name, time: minutes, story: storyText};

  this.articles.unshift(this.newArticle);
  
  console.log("Artikellistan efter pushad ny artikel: ", this.articles);
}

// DeleteArticle
deleteArticle(article){
  console.log("blogg-dataservice deleteArticle: ", article);
  this.articles = this.articles.filter
  (item => item.rubrik !== article) 
  console.log("blogg data service deletearticle()", this.articles);
}

  constructor() {}
}
