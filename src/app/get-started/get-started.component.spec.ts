import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { ApiService } from '../services/api-service.service';

import { GetStartedComponent } from './get-started.component';

describe('GetStartedComponent', () => {
  let component: GetStartedComponent;
  let fixture: ComponentFixture<GetStartedComponent>;
  let service: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStartedComponent ], 
      imports: [HttpClientModule, RouterModule.forRoot([])]
    })
    .compileComponents();
    fixture = TestBed.createComponent(GetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    let html = fixture.nativeElement as HTMLElement
    expect(html.querySelector('h1')?.textContent).toEqual('GET STARTED.')
  })

  it('should have a subtitle', () =>{
    let html = fixture.nativeElement as HTMLElement
    expect(html.querySelector('p')?.textContent).toEqual('Choose up to 5 options of any combination fo genre, artist, or song. First specify the cateegory of your choice (artist, song, or genre), then type the name in.')
  })
});
