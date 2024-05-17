import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { GetSpecificComponent } from './get-specific.component';

describe('GetSpecificComponent', () => {
  let component: GetSpecificComponent;
  let fixture: ComponentFixture<GetSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetSpecificComponent],
      imports: [HttpClientModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(GetSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have four input sliders', () => {
    let html = fixture.nativeElement as HTMLElement;

    expect(html.querySelectorAll('input').length).toBe(4);
  });

  it('should update the options object when sliderChange() is called', () => {
    component.sliderChange({ target: { id: 'popularity', value: 2 } });
    expect(component.options).toEqual({
      popularity: 2,
      energy: null,
      danceability: null,
      acoustics: null,
    });
  });
});
