import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-browse-playlist',
  templateUrl: './browse-playlist.component.html',
  styleUrls: ['./browse-playlist.component.css']
})
export class BrowsePlaylistComponent implements OnInit {
  data: any;
  tracks: any;
  msConversion:any = Utils.msConversion; 
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.apiService.getOnePlayList(id).subscribe((data:any) => {
        this.data = data
        this.tracks = data.tracks.items 
      })
    }
  }
}
