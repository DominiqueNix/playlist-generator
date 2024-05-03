import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  topPlaylists: any;

  newAlbums: any;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getNewAlbums().subscribe((data:any) => {
      this.newAlbums = data
      console.log(data.albums.items)
    })
    this.apiService.getTopPlaylists().subscribe((data:any) => {
      this.topPlaylists = data
    })
  }
}