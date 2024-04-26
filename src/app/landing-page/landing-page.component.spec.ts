import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two images', () => {
    const html = fixture.nativeElement as HTMLElement;

    let images = html.querySelectorAll('img')
    let img1 = html.querySelectorAll('img')[0]
    let img2 = html.querySelectorAll('img')[1]
    
    expect(images.length).toBe(2)
    expect(img1.getAttribute('src')).toBe('../../assets/Ellipse 1.png')
    expect(img2.getAttribute('src')).toBe('../../assets/3dicons.png')
  })

  it('should have a button with the correct link', () => {
    const html = fixture.nativeElement as HTMLElement;
    const a = html.querySelector('a')
    console.log(a?.getAttribute('routerLink'))
    expect(a?.children[0]).toBeTruthy()
    expect(a?.getAttribute('routerLink')).toBe('/getstarted')
  })
});
