import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { GetSpecificComponent } from './get-specific/get-specific.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent}, 
  {path: 'browse', component: BrowseComponent}, 
  {path: 'getstarted', component: GetStartedComponent}, 
  {path: 'getspecific', component: GetSpecificComponent}, 
  {path: 'playlist', component: PlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
