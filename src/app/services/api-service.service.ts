import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {BehaviorSubject, Observable, catchError, map, of, switchMap, tap, throwError} from 'rxjs'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  
  constructor(private http: HttpClient) { }

  recommendationInput: BehaviorSubject<any> = new BehaviorSubject<any>({
    getStartedData: null, getSpecificData: null
  });

  generatedPlaylist:BehaviorSubject<any> = new BehaviorSubject<any>(null);

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

  getGenres(): Observable<{}>{
    return this.getAccessToken().pipe(
      switchMap((accessToken:any) => {
         const headers = {
          'Authorization':`${accessToken.token_type} ${accessToken.access_token}`
        };
        return this.http.get(`https://api.spotify.com/v1/recommendations/available-genre-seeds`, {headers})
      })
    )
  }

  uriBuilder(obj: any): Observable<string>{
    if(obj.getStartedInput){
      let uri = 'https://api.spotify.com/v1/recommendations?limit=10'
      let artists:string = ''; 
      let tracks:string = ''; 
      let genres:string = '';
      let specifics:string = '';
      obj.getStartedInput.forEach((item:any) => {
        if(item.type === 'artist'){
          artists = artists + `${item.id}%2C`
          artists.concat()
        } else if(item.type === 'track'){
          tracks = tracks + `${item.id}%2C`
        } else if(item.type === 'genre'){
          genres = genres + `${item.id}%2C`
        }
      })
      if(obj.getSpecificInput.popularity !== null){
        specifics=specifics + `&target_popularity=${obj.getSpecificInput.popularity}`
      }
      if(obj.getSpecificInput.energy !== null){
        specifics= specifics + `&target_energy=${obj.getSpecificInput.energy}`
      }
      if(obj.getSpecificInput.acoustics !== null){
        specifics= specifics + `&target_acousticness=${obj.getSpecificInput.acoustics}`
      }
      if(obj.getSpecificInput.danceability !== null){
        specifics= specifics + `&target_danceability=${obj.getSpecificInput.danceability}`
      }
      if(artists !== ''){
        uri = uri + `&seed_artists=${artists}`
      }
      if(genres !== ''){
        uri = uri + `&seed_genres=${genres}`
      }
      if(tracks !== ''){
        uri = uri +`&seed_tracks=${tracks}`
      } if(specifics !== ''){
        uri = uri + specifics
      }
      return of(uri)
    } else {
      return of('messed up')
    }
  }
  
  getReccomendations(searchString: string): Observable<{}>{
    return this.getAccessToken().pipe(
      switchMap((accessToken:any) => {
         const headers = {
          'Authorization':`${accessToken.token_type} ${accessToken.access_token}`
        };
        return this.http.get(searchString, {headers})
      })
    )
       // return searchString.pipe(
    //   concatMap((uriString: string) => {
    //    return this.getAccessToken().pipe(
    //           switchMap((accessToken:any) => {
    //             const headers = {
    //               'Authorization':`${accessToken.token_type} ${accessToken.access_token}`
    //             };
    //             return this.http.get(uriString, {headers})
    //           })
    //         )
    //   })
    // )
  // }
  }
}