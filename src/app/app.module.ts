import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavComponent } from './nav/nav.component';
import { BrowseComponent } from './browse/browse.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavComponent,
    BrowseComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
