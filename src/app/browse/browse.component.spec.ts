import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, RouterModule } from '@angular/router';
import { ApiService } from '../services/api-service.service';
import { MockApiService } from '../services/mock-api.service';

import { BrowseComponent } from './browse.component';

describe('BrowseComponent', () => {
  let component: BrowseComponent;
  let fixture: ComponentFixture<BrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseComponent ], 
      imports: [HttpClientModule, RouterModule.forRoot([])], 
      providers: [
        {
          provide: ApiService, 
          useClass: MockApiService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have playlists', () => {
    expect(component.newAlbums).toBeTruthy()
    expect(component.newAlbums.albums.items[0].albums.name).toEqual('test')
  })

  it('should have albums', () =>{
    expect(component.topPlaylists).toBeTruthy()
    expect(component.topPlaylists.playlists.items[0].name).toEqual("playlist")
  })
});
