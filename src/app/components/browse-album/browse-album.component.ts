import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api-service.service';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-browse-album',
  templateUrl: './browse-album.component.html',
  styleUrl: './browse-album.component.css',
})
export class BrowseAlbumComponent implements OnInit {
  data: any;
  msConversion = Utils.msConversion;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getOneAlbum(id).subscribe((data: any) => {
        this.data = data;
      });
    }
  }
}
