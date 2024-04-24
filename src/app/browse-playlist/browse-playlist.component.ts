import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse-playlist',
  templateUrl: './browse-playlist.component.html',
  styleUrls: ['./browse-playlist.component.css']
})
export class BrowsePlaylistComponent implements OnInit {
  data: any;
  tracks: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    if(id) {
      this.apiService.getOnePlayList(id).subscribe((data:any) => {
        this.data = data
        console.log(this.data)
        this.tracks = data.tracks.items 
      })
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
