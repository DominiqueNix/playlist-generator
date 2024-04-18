import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  tracks: any;
  yourPlaylistTracks:any;
  broswePlayListTracks:any;

  constructor( private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.pipe(map(() => {
    //   this.tracks = window.history.state
    //   console.log(this.tracks)
    // }))
    console.log(history.state.broswePlaylist.tracks.items)
    if(history.state.broswePlaylist){
      this.tracks = history.state.broswePlaylist.tracks.items
    }
  }

  msConversion(time: number): string{
    let seconds = time/1000
     let secondsLeftOver = Math.round(seconds % 60);
     
     let mins = (seconds - secondsLeftOver) / 60

     if(secondsLeftOver < 10){
      return `${Math.round(mins)}:0${secondsLeftOver}`
     }


    return `${Math.round(mins)}:${secondsLeftOver}`
  }

}
