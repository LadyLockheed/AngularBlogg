import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { LatestArticleComponent } from './latest-article/latest-article.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddArticleComponent } from './add-article/add-article.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'start', component: StartPageComponent },
  { path: 'latestArticle', component: LatestArticleComponent },
  { path: 'allArticles', component: AllArticlesComponent }, 
  { path: 'addArticle', component: AddArticleComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'startt', redirectTo: '/start' },
  { path: 'adddArticle', redirectTo: '/addArticle' },
  { path: "**", component: PageNotFoundComponent },
 
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)
    // CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
