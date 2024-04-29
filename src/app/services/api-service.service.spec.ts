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

  it('should return new albums when getGetNewAlbums is called', async () => {
    let albums: {} | undefined;
    //mock data
    let mockAccessToken = {token_type:'creds',  access_token:'123'}
    let mockAlbums= {items: ['album1', 'album2', 'album3']}
    
    //mocking get access token
    jest.spyOn(service, 'getAccessToken').mockReturnValue(of(mockAccessToken))

    //subsribing to function call and setting the output
    service.getNewAlbums().subscribe((res:any) => {
      albums = res
    })
   
    //mocking http call
    const req = await httpMock.expectOne('https://api.spotify.com/v1/browse/new-releases?limit=5');

    //check that the method is get
    expect(req.request.method).toEqual('GET')

    //check the auth matches the mocked data
    const authHeader = req.request.headers.get('Authorization');
    expect(authHeader).toEqual(`${mockAccessToken.token_type} ${mockAccessToken.access_token}`)

    req.flush(mockAlbums);

    //expect the output of getAccessToken to equal the mocked data
    expect(albums).toEqual(mockAlbums)
  })

  it('should return playlists when getTopPlaylists() is called', async () => {
    let returnedPlaylists: {} | undefined;
    //mock data
    let mockAccessToken = {token_type:'creds',  access_token:'123'}
    let mockPlaylists= {items: ['playlist1', 'playlist2', 'playlist3']}
    
    //mocking get access token
    jest.spyOn(service, 'getAccessToken').mockReturnValue(of(mockAccessToken))

    //subsribing to function call and setting the output
    service.getTopPlaylists().subscribe((res:any) => {
      returnedPlaylists = res
    })
   
    //mocking http call
    const req = await httpMock.expectOne('https://api.spotify.com/v1/browse/featured-playlists?locale=sv_SE&limit=9');

    //check that the method is get
    expect(req.request.method).toEqual('GET')

    //check the auth matches the mocked data
    const authHeader = req.request.headers.get('Authorization');
    expect(authHeader).toEqual(`${mockAccessToken.token_type} ${mockAccessToken.access_token}`)

    req.flush(mockPlaylists);

    //expect the output of getAccessToken to equal the mocked data
    expect(returnedPlaylists).toEqual(mockPlaylists)
  })
});
