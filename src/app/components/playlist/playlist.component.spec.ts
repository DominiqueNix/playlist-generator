import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api-service.service';
import { PlaylistComponent } from './playlist.component';
import { MockApiService } from '../../services/mock-api.service';

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;
  let service: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylistComponent],
      imports: [HttpClientModule, RouterModule.forRoot([])],
      providers: [
        {
          provide: ApiService,
          useClass: MockApiService,
        },
      ],
    }).compileComponents();
    service = TestBed.inject(ApiService);
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have tracks', () => {
    expect(component.tracks.length).toBe(2);
  });

  it('should have a table element with rows', () => {
    let html = fixture.nativeElement as HTMLElement;
    let table = html.querySelector('table');
    let rows = html.querySelectorAll('tr');

    expect(table).toBeTruthy();
    expect(rows.length).toBe(3);
  });

  it('should have a heading row with the correct information', () => {
    let html = fixture.nativeElement as HTMLElement;
    let tableHeader = html.querySelectorAll('tr')[0];

    expect(tableHeader.children.length).toBe(5);
    expect(tableHeader.children[0].textContent).toEqual('Track');
    expect(tableHeader.children[2].textContent).toEqual('Artist');
    expect(tableHeader.children[3].textContent).toEqual('Album');
    expect(tableHeader.children[4].textContent).toEqual('Time');
  });

  it('the first track should have a row with the correct information', () => {
    let html = fixture.nativeElement as HTMLElement;
    let tableRow1 = html.querySelectorAll('tr')[1];

    expect(tableRow1.children.length).toBe(5);
    expect(tableRow1.children[0].children[0].getAttribute('src')).toEqual(
      'https://testImage1.co'
    );
    expect(tableRow1.children[1].textContent).toEqual('song 1');
    expect(tableRow1.children[2].textContent).toEqual('song 1 artist');
    expect(tableRow1.children[3].textContent).toEqual('song album 1');
    expect(tableRow1.children[4].textContent).toEqual('0:00');
  });

  it('the second track should have a row with the correct information', () => {
    let html = fixture.nativeElement as HTMLElement;
    let tableRow1 = html.querySelectorAll('tr')[2];

    expect(tableRow1.children.length).toBe(5);
    expect(tableRow1.children[0].children[0].getAttribute('src')).toEqual(
      'https://testImage2.co'
    );
    expect(tableRow1.children[1].textContent).toEqual('song 2');
    expect(tableRow1.children[2].textContent).toEqual('song 2 artist');
    expect(tableRow1.children[3].textContent).toEqual('song album 2');
    expect(tableRow1.children[4].textContent).toEqual('0:00');
  });

  it('should convert the duration to the correct time when msConversion() is called', () => {
    let expected = '3:21';

    let actual = component.msConversion(201000);
    expect(actual).toEqual(expected);
  });
});
