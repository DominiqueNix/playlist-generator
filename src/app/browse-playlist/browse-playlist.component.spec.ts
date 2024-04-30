import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, RouterModule } from '@angular/router';

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
});
