import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {BehaviorSubject, Observable, of} from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  
  constructor(private http: HttpClient) { }

  getAccessToken(): Observable<{}>{
    const headers = new HttpHeaders({
      'Content_type' : 'application/x-www-form-urlencoded'
    })
    return this.http.post('https://accounts.spotify.com/api/token', `grant_type=client_credentials&client_id=${environment.clientId}&client_secret=${environment.clientSecret}` , {headers: headers})
  }

  // getPopularAlbums(): Observable<{}>{
  //   return this.http.get<{}>();
  // }
}
 