import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockApiService extends ApiService{

  override recommendationInput: BehaviorSubject<any> = new BehaviorSubject({});
  override uriBuilder(obj: any): Observable<string> {
      return of('')
  }
  override getRecommendations(searchString: string): Observable<{}> {
      return of({ tracks:   [
        {
          "album": {
          "images": [{},{},
            {
              "url": "https://testImage1.co",
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
              "url": "https://testImage2.co",
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

  override getGenres(): Observable<{}> {
      return of(['pop', 'rock', 'test'])
  }

  override search(type: string, query: string): Observable<{}> {
        return of({
          "artists": {
            "items": [
              {
                "id": "1",
                "name": "artist 1",
              }, 
              {
                "id": "2",
                "name": "artist 2",
              },
            ]
          }
        })
  }

  override getOnePlayList(playlistId: any): Observable<{}> {
      return of({
        "name": "playlist",
        "tracks": {
          "items": [
            {
              "track": {
                "name": "track name 1",
                "duration_ms": 0,
                
                "album": {
                  "name": "test album 1", 
                   "images": [
                    {"url": ""}, 
                    {"url": ""},
                    {
                      "url": "google.com", 
                    }
                  ],
                }, 
                "artists": [{
                  "name": "test artist 1"
                }]
              }, 
            }, 
            {
              "track": {
                "name": "track name 2",
                "duration_ms": 0,
               
                "album": { 
                  "name": "test album 2", 
                   "images": [
                  {"url": ""}, 
                  {"url": ""},
                  {
                    "url": "google.com", 
                  }
                ],
                }, 
                "artists": [{
                  "name": "test artist 2"
                }]
              }, 
            }
          ]
        }
      })
  }
  override getNewAlbums(): Observable<{}> {
      return of({
        "albums": {
          "items": [
            {
              "images": [
                {"url": ""},
                {"url": "test.com"},
              ], 
              "name": "test", 
              "artists": [
                {"name": "test artist"}
              ], 
              "total_tracks": 9, 
              "release_date": "2023-12-12"
          }, 
          ]
        }
      })
  }

  override getTopPlaylists(): Observable<{}> {
      return of({
        "playlists": {
          "items": [
            {"name": "playlist", "id": 1}, 
            {"name": "playlist", "id": 2}, 
            {"name": "playlist", "id": 3}, 
            {"name": "playlist", "id": 4}, 
            {"name": "playlist", "id": 5},
            {"name": "playlist", "id": 6},
            {"name": "playlist", "id": 7},
            {"name": "playlist", "id": 8},
            {"name": "playlist", "id": 9},
          ]
        }
      })
  }
}
