import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavComponent } from './nav/nav.component';
import { BrowseComponent } from './browse/browse.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GetSpecificComponent } from './get-specific/get-specific.component';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavComponent,
    BrowseComponent,
    GetStartedComponent,
    GetSpecificComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
