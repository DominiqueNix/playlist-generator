import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsePlaylistComponent } from './browse-playlist.component';

describe('BrowsePlaylistComponent', () => {
  let component: BrowsePlaylistComponent;
  let fixture: ComponentFixture<BrowsePlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowsePlaylistComponent ]
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
