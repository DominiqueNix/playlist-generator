import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiService } from '../services/api-service.service';

import { PlaylistComponent } from './playlist.component';

@Injectable()
class MockApiService extends ApiService {
  override recommendationInput!: BehaviorSubject<any>;
  override uriBuilder(obj: any): Observable<string> {
      return of('')
  }
  override getReccomendations(searchString: string): Observable<{}> {
      return of({ tracks:   [
        {
          "album": {
          "images": [{},{},
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
              "height": 300,
              "width": 300
            }
          ],
          "name": "song album 1",
        },
        "artists": [{ "name": "song 1 artist",}],
        "duration_ms": 0,
        "name": "song 1",
        }, 
        {
          "album": {
          "images": [{},{},
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
              "height": 300,
              "width": 300
            }
          ],
          "name": "song album 2",
        },
        "artists": [{ "name": "song 2 artist",}],
        "duration_ms": 0,
        "name": "song 2",
        }
      ]
    });
  }
}

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;
  let service: ApiService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistComponent], 
      imports: [HttpClientModule, RouterModule.forRoot([])],
      providers: [
        {
          provide: ApiService, 
          useClass: MockApiService
        }
      ]
    })
    .compileComponents();
    service = TestBed.inject(ApiService)
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { 
    expect(component).toBeTruthy();
  });

  it('should have tracks', () => {
    expect(component.tracks.length).toBe(2)
  })
});
