import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
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

  it('should return an acces token when getAccessToken is called', () => {
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
    let newAlbums: {} | undefined;
    let mockedData= {items: ['album1', 'album2', 'album3']}
    service.getNewAlbums().subscribe(res => {
      newAlbums = res;
    });

    // const tokenReq = httpMock.expectOne('https://accounts.spotify.com/api/token')
    // const albumReq = httpMock.expectOne('https://api.spotify.com/v1/browse/new-releases?limit=5')
    // tokenReq.flush({})
    // albumReq.flush(mockedData);
    // expect(newAlbums).toEqual(mockedData)
  })
});
