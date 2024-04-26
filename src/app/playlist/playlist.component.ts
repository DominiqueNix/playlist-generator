import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, concatMap, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  tracks: any;
  searchString!: string;

  constructor( private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.apiService.recommendationInput.pipe(
      concatMap((inputData:any)=> {
        console.log(inputData)
            return this.apiService.uriBuilder(inputData)
      }),
      concatMap((uri: string) => {
        return this.apiService.getReccomendations(uri)
      })
    ).subscribe((data:any) => {
      console.log(data)
      this.tracks = data.tracks;
      console.log(this.tracks)
    })
    // this.apiService.getReccomendations('https://api.spotify.com/v1/recommendations?limit=10&seed_artists=0PCCGZ0wGLizHt2KZ7hhA2&target_popularity=9&target_energy=6&target_danceability=0.7').subscribe((data:any) => {
    //   this.tracks = data.tracks
    // })
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
