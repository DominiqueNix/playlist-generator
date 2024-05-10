import { Component, OnInit } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { ApiService } from '../services/api-service.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {
  
  //array that holds values stored in pills 
  chosenCriteria: any = [];
  //keeps track of what the user is searching for (e.g. artist, song, genre)
  selectedType: string = 'artist';
  //string the user is searching for
  searchString!: string;
  // The results from the search
  searchResults: Observable<any> = of({});
  // A filtered list of available genres based on user input
  filteredGenres:Observable<any> = of([]);
  // All available genres offered by spotify
  availableGenres: any;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    //populated available genres on init
    this.apiService.getGenres().subscribe((data: any) => {
      this.availableGenres = data.genres
    })
  }

  //will remove criteria from the chosen criteria array
  removePick(selected: string): void{
    let newCriteria:any = [];
    for(let i = 0; i < this.chosenCriteria.length; i++){
      if(selected !== this.chosenCriteria[i]){
        newCriteria.push(this.chosenCriteria[i])
      }
    }
    this.chosenCriteria = newCriteria; 
  } 

  //function will display the data the user has search for
  search(event:any){
   if(this.selectedType === 'genre'){
      this.filterGenres(this.searchString)
   } else {
    this.apiService.search(this.selectedType, this.searchString).subscribe((data: any) => {
      this.searchResults = of(data)   
      if(event.target.value){
        event.target.value = ""
      }
      
    })
   }
  }

  // will add an artist or song to the chosen criteria array
  addCriteria(item: any){
    let obj = {
      type: this.selectedType, 
      name: item.name, 
      id: item.id
    }
    if(this.chosenCriteria.length > 0){
      for(let i = 0; i < this.chosenCriteria.length; i++){
        if(obj.id === this.chosenCriteria[i].id){
          return
        }
      }  
    }
    this.chosenCriteria.push(obj)
  }


  // will add genre to the chosen criteria array
  addGenre(item:any){
    let obj = {
      type: this.selectedType, 
      name: item
    }
    if(this.chosenCriteria.length > 0){
      for(let i = 0; i < this.chosenCriteria.length; i++){
        if(obj.name === this.chosenCriteria[i].name){
          return
        }
      }  
    }
    this.chosenCriteria.push(obj)
  }

  // takes in user selected input
  onSelectChange(type: string){
    this.selectedType = type
  }

  // takes in user text input
  updateUserInput(event: any){
    this.searchString = event.target.value;
  }


  // generates a filtered array of genres based on user search
  filterGenres(input: string): void{
    let searchArr:any[] = [];
    for(let i = 0; i < this.availableGenres.length; i++){
        input.toLowerCase()
        if(this.availableGenres[i].includes(input)){
          searchArr = [...searchArr, this.availableGenres[i]]
        }
    }
    this.filteredGenres = of(searchArr)
  }

  next():void {
    this.apiService.recommendationInput.next({getStartedInput: this.chosenCriteria})
    this.router.navigate(['/getspecific'])
  }
}