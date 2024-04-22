import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {BehaviorSubject, Observable, catchError, map, of, switchMap, tap, throwError} from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  
  constructor(private http: HttpClient) { }

  currentPlaylist: Observable<{}> = of({});

  getAccessToken(): Observable<{}> {
    const headers = new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
    const body = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: environment.clientId, 
      client_secret: environment.clientSecret
    })
    return  this.http.post('https://accounts.spotify.com/api/token', body.toString(), {headers})
  }

  getNewAlbums(): Observable<{}>{ 
    return this.getAccessToken().pipe(
      switchMap((accessToken:any) => {
         const headers = {
          'Authorization':`${accessToken.token_type} ${accessToken.access_token}`
        };
        return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=5', {headers})
      })
    )
  }
  
  getTopPlaylists(): Observable<{}>{
    return this.getAccessToken().pipe(
      switchMap((accessToken:any) => {
         const headers = {
          'Authorization':`${accessToken.token_type} ${accessToken.access_token}`
        };
        return this.http.get('https://api.spotify.com/v1/browse/featured-playlists?locale=sv_SE&limit=9', {headers})
      })
    )
  }
// TODO: need to fine a way to set the currentplaylist variable
  getOnePlayList(playlistId: any): Observable<{}>{
    return this.getAccessToken().pipe(
      switchMap((accessToken:any) => {
         const headers = {
          'Authorization':`${accessToken.token_type} ${accessToken.access_token}`
        };
        return this.http.get(`https://api.spotify.com/v1/playlists/${playlistId}?market=ES`, {headers})
      })
    )
  }

  search(type:string, query:string): Observable<{}>{
    return this.getAccessToken().pipe(
      switchMap((accessToken:any) => {
         const headers = {
          'Authorization':`${accessToken.token_type} ${accessToken.access_token}`
        };
        return this.http.get(`https://api.spotify.com/v1/search?q=${query}&type=${type}`, {headers})
      })
    )
  }

  getGenres():  Observable<{}>{
    return this.getAccessToken().pipe(
      switchMap((accessToken:any) => {
         const headers = {
          'Authorization':`${accessToken.token_type} ${accessToken.access_token}`
        };
        return this.http.get(`https://api.spotify.com/v1/recommendations/available-genre-seeds`, {headers})
      })
    )
  }
}