import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { ApiService } from '../services/api-service.service';
import { MockApiService } from '../services/mock-api.service';

import { GetStartedComponent } from './get-started.component';

describe('GetStartedComponent', () => {
  let component: GetStartedComponent;
  let fixture: ComponentFixture<GetStartedComponent>;
  let mockApiService: MockApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStartedComponent ], 
      imports: [HttpClientModule, RouterModule.forRoot([])], 
      providers: [
        {
          provide: ApiService, 
          useClass: MockApiService
        }
      ]
    })
    .compileComponents();
    mockApiService = TestBed.inject(MockApiService)
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
    expect(html.querySelector('p')?.textContent).toEqual('Choose up to 5 options of any combination for genre, artist, or song. First specify the category of your choice (artist, song, or genre), then type the name in.')
  })

  it('should remove a pick from the chosen criteria when removePick() is called', () => {
     component.chosenCriteria = [{type: 'type', name: 'test1'},{type: 'type', name: 'test2', id: '2'}]
     component.removePick(component.chosenCriteria[0])

     expect(component.chosenCriteria).toEqual([{type: 'type', name: 'test2', id: '2'}])

  })

  it('should updated searchResults when search() is called', () => {
    
    component.selectedType = 'genre'
    component.searchString = 'o'
    component.availableGenres = ['pop', 'rock', 'test']
    let event = {target: {value: component.searchString}}
    let actual1;
    component.search(event)
    component.filteredGenres.subscribe((data:any) => {
      actual1 = data
    })   
    expect(actual1).toEqual(['pop', 'rock'])


    component.selectedType = 'artist';
    component.search(event)
    let actual;
    component.searchResults.subscribe((data:any) => {
      actual = data
    })
    expect(actual).toEqual({
      "artists": {
        "items": [
          {
            "id": "1",
            "name": "artist 1",
          }, 
          {
            "id": "2",
            "name": "artist 2",
          },
        ]
      }
    })
  })

  it('should add criteria when addCriteria() is called', () => {
    let item = { name: 'test2', id: '2'};
    component.selectedType = 'track'
    component.addCriteria(item)

    expect(component.chosenCriteria).toEqual([{type: 'track', name: 'test2', id: '2'}])
  })

  it('should should add a genre when addGenre() is called', () => {
    let item = 'pop';
    component.selectedType = 'genre'
    component.addGenre(item)

    expect(component.chosenCriteria).toEqual([{type: 'genre', name: 'pop'}])
  })

  it('should update the selectedType when user changes select type', () => {
    component.onSelectChange('track')
    expect(component.selectedType).toEqual('track')
  })

  it('should update searchString when user types in search bar', () => {
    component.updateUserInput({target: {value: 'hi'}})
    expect(component.searchString).toEqual('hi')
  })

  it('should filter the genre based on user input', () => {
    component.availableGenres = ['pop', 'rock', 'test']
    component.filterGenres('o')
    let actual;

    component.filteredGenres.subscribe((data:any) => {
      actual = data
    })

    expect(actual).toEqual(['pop', 'rock'])
  })

  // it('should update recommendationInput when next() is called', () => {
  //   component.chosenCriteria = [{type: 'type', name: 'test1'},{type: 'type', name: 'test2', id: '2'}]
  //   component.next();
  //   let actual;

  //   mockApiService.recommendationInput.subscribe((data: any) => {
  //     actual = data
  //   })
  //   expect(actual).toEqual({getStartedInput: [{type: 'type', name: 'test1'},{type: 'type', name: 'test2', id: '2'}]})
  // })

});
