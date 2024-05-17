import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './components/browse/browse.component';
import { GetSpecificComponent } from './components/get-specific/get-specific.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { BrowsePlaylistComponent } from './components/browse-playlist/browse-playlist.component';
import { BrowseAlbumComponent } from './components/browse-album/browse-album.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent}, 
  {path: 'browse', component: BrowseComponent}, 
  {path: 'getstarted', component: GetStartedComponent}, 
  {path: 'getspecific', component: GetSpecificComponent}, 
  {path: 'playlist', component: PlaylistComponent}, 
  {path: 'browseplaylist/:id', component: BrowsePlaylistComponent}, 
  {path: 'browsealbum/:id', component: BrowseAlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
