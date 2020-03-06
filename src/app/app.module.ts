import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { LatestArticleComponent } from './latest-article/latest-article.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AddArticleComponent,
    LatestArticleComponent,
    AllArticlesComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
