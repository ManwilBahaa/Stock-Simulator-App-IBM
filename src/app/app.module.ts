import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailComponent } from './detail/detail.component';
import { DataService } from './data.service';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    ProfileComponent,
    DetailComponent,
    ProfileDetailComponent,
    MainPageComponent,
    NewsFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
