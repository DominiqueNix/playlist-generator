import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api-service.service';
import { MockApiService } from '../../services/mock-api.service';

import { BrowseAlbumComponent } from './browse-album.component';

describe('BrowseAlbumComponent', () => {
  let component: BrowseAlbumComponent;
  let fixture: ComponentFixture<BrowseAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseAlbumComponent ], 
      imports: [HttpClientModule, RouterModule.forRoot([])], 
      providers: [
        { 
         provide: ActivatedRoute, 
           useValue: {
             snapshot: {
               paramMap: convertToParamMap({id: 1})
             }
           }
         }, 
         {
          provide: ApiService, 
          useClass: MockApiService
        }
       ]
     
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a tracks', () =>{
    expect(component.data.tracks.items.length).toBe(2)
  })  

  it('should have a title of the album name', () => {
    let html = fixture.nativeElement as HTMLElement
    let title = html.querySelector('.playlist-title')?.textContent
    expect(title).toEqual('TEST ALBUM NAME')
  })

  it('should have a subtitle of the album artist', () => {
    let html = fixture.nativeElement as HTMLElement
    let subtitle = html.querySelector('.artist-name')?.textContent
    expect(subtitle).toEqual('artist 1')
  })

  it('should have an album image with the correct source', () =>{
    let html = fixture.nativeElement as HTMLElement
    let img = html.querySelector('.album-pic')?.getAttribute('src')
    expect(img).toEqual('google.com')
  })

  it('should have a table element with rows', () => {
    let html = fixture.nativeElement as HTMLElement
    let table = html.querySelector('table');
    let rows = html.querySelectorAll('tr');

    expect(table).toBeTruthy()
    expect(rows.length).toBe(3)
  })
  
  it('should have a heading row with the correct information', () => {
    let html = fixture.nativeElement as HTMLElement
    let tableHeader = html.querySelectorAll('tr')[0];

    expect(tableHeader.children.length).toBe(3)
    expect(tableHeader.children[0].textContent).toEqual('Track');
    expect(tableHeader.children[1].textContent).toEqual('Artist');
    expect(tableHeader.children[2].textContent).toEqual('Time');
  })

  it('the first track should have a row with the correct information', ()=>{
    let html = fixture.nativeElement as HTMLElement
    let tableRow1 = html.querySelectorAll('tr')[1];

    expect(tableRow1.children.length).toBe(3)
    expect(tableRow1.children[0].textContent).toEqual("track 1");
    expect(tableRow1.children[1].textContent).toEqual("track artist");
    expect(tableRow1.children[2].textContent).toEqual('0:00');
  })

  it('the second track should have a row with the correct information', ()=>{
    let html = fixture.nativeElement as HTMLElement
    let tableRow1 = html.querySelectorAll('tr')[2];

    expect(tableRow1.children.length).toBe(3)
    expect(tableRow1.children[0].textContent).toEqual("track 2");
    expect(tableRow1.children[1].textContent).toEqual("track artist ft. track artist 2");
    expect(tableRow1.children[2].textContent).toEqual('0:00');
  })

  it('should convert the duration to the correct time when msConversion() is called', () => {
    let expected = "3:21";

    let actual = component.msConversion(201000);
    expect(actual).toEqual(expected);
  })


});
