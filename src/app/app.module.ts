import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowseComponent } from './components/browse/browse.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GetSpecificComponent } from './components/get-specific/get-specific.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { BrowsePlaylistComponent } from './components/browse-playlist/browse-playlist.component';
import { BrowseAlbumComponent } from './components/browse-album/browse-album.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavComponent,
    BrowseComponent,
    GetStartedComponent,
    GetSpecificComponent,
    PlaylistComponent,
    BrowsePlaylistComponent, 
    BrowseAlbumComponent
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
