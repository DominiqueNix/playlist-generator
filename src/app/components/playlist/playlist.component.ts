import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, concatMap, map, of, switchMap } from 'rxjs';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  tracks: any;
  msConversion:any = Utils.msConversion

  constructor( private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.apiService.recommendationInput.pipe(
      concatMap((inputData:any)=> {
            return this.apiService.uriBuilder(inputData)
      }),
      concatMap((uri: string) => {
        return this.apiService.getRecommendations(uri)
      })
    ).subscribe((data:any) => {
      this.tracks = data.tracks;
    })
  }
}
