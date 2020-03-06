import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component'

const routes: Routes = [
  { path: 'start', component: StartPageComponent }
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)
    // CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
