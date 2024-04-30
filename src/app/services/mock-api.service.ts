import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockApiService extends ApiService{

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
}
