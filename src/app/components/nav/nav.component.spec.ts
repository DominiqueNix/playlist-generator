import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the nav', () => {
    expect(component).toBeTruthy();
  });

  it('should have three links', () => {
    let html = fixture.nativeElement as HTMLElement;
    expect(html.querySelectorAll('.list-group-link').length).toBe(3);
  });

  it('each nav-lick should have the correct link', () => {
    let html = fixture.nativeElement as HTMLElement;
    let homeLink = html.querySelectorAll('a')[0];
    let browseLink = html.querySelectorAll('a')[1];
    let generateLink = html.querySelectorAll('a')[2];
    expect(homeLink.getAttribute('href')?.slice(-1)).toBe('/');
    expect(browseLink.getAttribute('href')?.slice(-7)).toBe('/browse');
    expect(generateLink.getAttribute('href')?.slice(-11)).toBe('/getstarted');
  });
});
