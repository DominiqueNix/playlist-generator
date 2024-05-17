import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api-service.service';
import { MockApiService } from '../../services/mock-api.service';

import { BrowsePlaylistComponent } from './browse-playlist.component';

describe('BrowsePlaylistComponent', () => {
  let component: BrowsePlaylistComponent;
  let fixture: ComponentFixture<BrowsePlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowsePlaylistComponent ], 
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

    fixture = TestBed.createComponent(BrowsePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a tracks', () =>{
    expect(component.tracks.length).toBe(2)
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

    expect(tableHeader.children.length).toBe(5)
    expect(tableHeader.children[0].textContent).toEqual('Track');
    expect(tableHeader.children[2].textContent).toEqual('Artist');
    expect(tableHeader.children[3].textContent).toEqual('Album');
    expect(tableHeader.children[4].textContent).toEqual('Time');
  })

  it('the first track should have a row with the correct information', ()=>{
    let html = fixture.nativeElement as HTMLElement
    let tableRow1 = html.querySelectorAll('tr')[1];

    expect(tableRow1.children.length).toBe(5)
    expect(tableRow1.children[0].children[0].getAttribute('src')).toEqual('google.com');
    expect(tableRow1.children[1].textContent).toEqual("track name 1");
    expect(tableRow1.children[2].textContent).toEqual("test artist 1");
    expect(tableRow1.children[3].textContent).toEqual("test album 1");
    expect(tableRow1.children[4].textContent).toEqual('0:00');
  })

  it('the second track should have a row with the correct information', ()=>{
    let html = fixture.nativeElement as HTMLElement
    let tableRow1 = html.querySelectorAll('tr')[2];

    expect(tableRow1.children.length).toBe(5)
    expect(tableRow1.children[0].children[0].getAttribute('src')).toEqual('google.com');
    expect(tableRow1.children[1].textContent).toEqual("track name 2");
    expect(tableRow1.children[2].textContent).toEqual("test artist 2");
    expect(tableRow1.children[3].textContent).toEqual("test album 2");
    expect(tableRow1.children[4].textContent).toEqual('0:00');
  })

  it('should convert the duration to the correct time when msConversion() is called', () => {
    let expected = "3:21";

    let actual = component.msConversion(201000);
    expect(actual).toEqual(expected);
  })

});
