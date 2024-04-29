import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api-service.service';
import { of, switchMap } from 'rxjs';

describe('ApiServiceService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an access token when getAccessToken is called', () => {
    let accessToken: {} | undefined;
    let mockedAccessToken = {token_type:'creds',  access_token:'123'}
    service.getAccessToken().subscribe(res => {
      accessToken = res;
    });
    const req = httpMock.expectOne(
      'https://accounts.spotify.com/api/token'
    )
    req.flush(mockedAccessToken);
    expect(accessToken).toEqual(mockedAccessToken)
  })

  it('should return new albums when getGetNewAlbums is called', () => {
    let albums: {} | undefined;
    //mock data
    let mockAccessToken = {token_type:'creds',  access_token:'123'}
    let mockAlbums= {items: ['album1', 'album2', 'album3']}
    
    //mocking get access token
    jest.spyOn(service, 'getAccessToken').mockReturnValue(of(mockAccessToken))

    //subscribing to function call and setting the output
    service.getNewAlbums().subscribe((res:any) => {
      albums = res
    })
   
    //mocking http call
    const req = httpMock.expectOne('https://api.spotify.com/v1/browse/new-releases?limit=5');

    //check that the method is get
    expect(req.request.method).toEqual('GET')

    //check the auth matches the mocked data
    const authHeader = req.request.headers.get('Authorization');
    expect(authHeader).toEqual(`${mockAccessToken.token_type} ${mockAccessToken.access_token}`)

    req.flush(mockAlbums);

    //expect the output of getAccessToken to equal the mocked data
    expect(albums).toEqual(mockAlbums)
  })

  it('should return playlists when getTopPlaylists() is called', () => {
    let returnedPlaylists: {} | undefined;
    //mock data
    let mockAccessToken = {token_type:'creds',  access_token:'123'}
    let mockPlaylists= {items: ['playlist1', 'playlist2', 'playlist3']}
    
    //mocking get access token
    jest.spyOn(service, 'getAccessToken').mockReturnValue(of(mockAccessToken))

    //subscribing to function call and setting the output
    service.getTopPlaylists().subscribe((res:any) => {
      returnedPlaylists = res
    })
   
    //mocking http call
    const req = httpMock.expectOne('https://api.spotify.com/v1/browse/featured-playlists?locale=sv_SE&limit=9');

    //check that the method is get
    expect(req.request.method).toEqual('GET')

    //check the auth matches the mocked data
    const authHeader = req.request.headers.get('Authorization');
    expect(authHeader).toEqual(`${mockAccessToken.token_type} ${mockAccessToken.access_token}`)

    req.flush(mockPlaylists);

    //expect the output of getAccessToken to equal the mocked data
    expect(returnedPlaylists).toEqual(mockPlaylists)
  })

  it('should return  one playlist when  getOnePlayList() is called', () => {
    let returnedPlaylist: {} | undefined;
    //mock data
    let mockAccessToken = {token_type:'creds',  access_token:'123'}
    let mockPlaylist= {playlist: {name: 'playlist1', id: '123'}}
    
    //mocking get access token
    jest.spyOn(service, 'getAccessToken').mockReturnValue(of(mockAccessToken))

    //subscribing to function call and setting the output
    service.getOnePlayList('123').subscribe((res:any) => {
      returnedPlaylist = res
    })
    //mocking http call
    const req = httpMock.expectOne('https://api.spotify.com/v1/playlists/123?market=ES');

    //check that the method is get
    expect(req.request.method).toEqual('GET')

    //check the auth matches the mocked data
    const authHeader = req.request.headers.get('Authorization');
    expect(authHeader).toEqual(`${mockAccessToken.token_type} ${mockAccessToken.access_token}`)

    req.flush(mockPlaylist);

    //expect the output of getAccessToken to equal the mocked data
    expect(returnedPlaylist).toEqual(mockPlaylist)
  })

  it('should return a search list when search() is called', () => {
    let returnedSearch: {} | undefined;
    //mock data
    let mockAccessToken = {token_type:'creds',  access_token:'123'}
    let mockSearch= {items:['searchItem1', 'searchItem2', 'searchItem3']}
    
    //mocking get access token
    jest.spyOn(service, 'getAccessToken').mockReturnValue(of(mockAccessToken))

    //subscribing to function call and setting the output
    service.search('artist', 'test').subscribe((res:any) => {
      returnedSearch = res
    })
    //mocking http call
    const req = httpMock.expectOne('https://api.spotify.com/v1/search?q=test&type=artist');

    //check that the method is get
    expect(req.request.method).toEqual('GET')

    //check the auth matches the mocked data
    const authHeader = req.request.headers.get('Authorization');
    expect(authHeader).toEqual(`${mockAccessToken.token_type} ${mockAccessToken.access_token}`)

    req.flush(mockSearch);

    //expect the output of getAccessToken to equal the mocked data
    expect(returnedSearch).toEqual(mockSearch)
  })

  it('should return a genre array when getGenres() is called', () => {
    let returnedGenres: {} | undefined;
    //mock data
    let mockAccessToken = {token_type:'creds',  access_token:'123'}
    let mockGenres= ['genre1', 'genre2', 'genre3']
    
    //mocking get access token
    jest.spyOn(service, 'getAccessToken').mockReturnValue(of(mockAccessToken))

    //subscribing to function call and setting the output
    service.getGenres().subscribe((res:any) => {
      returnedGenres = res
    })
    //mocking http call
    const req = httpMock.expectOne('https://api.spotify.com/v1/recommendations/available-genre-seeds');

    //check that the method is get
    expect(req.request.method).toEqual('GET')

    //check the auth matches the mocked data
    const authHeader = req.request.headers.get('Authorization');
    expect(authHeader).toEqual(`${mockAccessToken.token_type} ${mockAccessToken.access_token}`)

    req.flush(mockGenres);

    //expect the output of getAccessToken to equal the mocked data
    expect(returnedGenres).toEqual(mockGenres)
  })
  

  it('should return a valid uri when uriBuilder() is called', () =>{
    let testObj = {
      getStartedInput: [
        {type: 'artist', name: 'testArt1', id: 1}, 
        {type: 'artist', name: 'testArt2', id: 2}, 
        {type: 'genre', name: 'pop'},
        {type: 'track', name: 'testSong1', id: 1}, 
        {type: 'genre', name: 'rock'}
      ], 
      getSpecificInput: {
        popularity: '7', 
        energy: '6',
        acoustics: '2',
        danceability: null,
      }
    }
    let actual: string | undefined; 

    service.uriBuilder(testObj).subscribe((data: any) => {
      actual = data
    })

    let expected = 'https://api.spotify.com/v1/recommendations?limit=10&seed_artists=1%2C2%2C&seed_genres=pop%2Crock%2C&seed_tracks=1%2C&target_popularity=7&target_energy=6&target_acousticness=2'

    expect(actual).toEqual(expected)
  })

  it('should return a playlist when getRecommendations() is called', () => {
    let returnedTracks: {} | undefined;
    //mock data
    let mockAccessToken = {token_type:'creds',  access_token:'123'}
    let mockTracks= {items:['song1', 'song2', 'song3']}
    
    //mocking get access token
    jest.spyOn(service, 'getAccessToken').mockReturnValue(of(mockAccessToken))

    let searchString = 'https://api.spotify.com/v1/recommendations?limit=10&seed_artists=1%2C2%2C&seed_genres=pop%2Crock%2C&seed_tracks=1%2C&target_popularity=7&target_energy=6&target_acousticness=2'

    //subscribing to function call and setting the output
    service.getReccomendations(searchString).subscribe((res:any) => {
      returnedTracks = res
    })
    //mocking http call
    const req = httpMock.expectOne('https://api.spotify.com/v1/recommendations?limit=10&seed_artists=1%2C2%2C&seed_genres=pop%2Crock%2C&seed_tracks=1%2C&target_popularity=7&target_energy=6&target_acousticness=2');

    //check that the method is get
    expect(req.request.method).toEqual('GET')

    //check the auth matches the mocked data
    const authHeader = req.request.headers.get('Authorization');
    expect(authHeader).toEqual(`${mockAccessToken.token_type} ${mockAccessToken.access_token}`)

    req.flush(mockTracks);

    //expect the output of getAccessToken to equal the mocked data
    expect(returnedTracks).toEqual(mockTracks)
  })

});
