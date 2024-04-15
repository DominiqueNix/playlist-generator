import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSpecificComponent } from './get-specific.component';

describe('GetSpecificComponent', () => {
  let component: GetSpecificComponent;
  let fixture: ComponentFixture<GetSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSpecificComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
