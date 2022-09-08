import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

const routes: Routes = [
  {path:'', component : MainPageComponent},
  {path:'userProfile', component : ProfileDetailComponent},
  {path:'news' , component:NewsFeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
