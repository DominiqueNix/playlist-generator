import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseAlbumComponent } from './browse-album.component';

describe('BrowseAlbumComponent', () => {
  let component: BrowseAlbumComponent;
  let fixture: ComponentFixture<BrowseAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseAlbumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
