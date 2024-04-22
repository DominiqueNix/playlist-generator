import { Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  chosenCriteria: any = [];
  selectedType: string = 'artist';
  searchString!: string;
  searchResults: Observable<any> = of({});
  filteredGeneres:Observable<any> = of([]);
  avalibleGenres: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getGenres().subscribe((data: any) => {
      this.avalibleGenres = data.genres
    })
  }

  removePick(selected: string): void{
    console.log(selected)
    let newTesting:any = [];
    for(let i = 0; i < this.chosenCriteria.length; i++){
      if( selected !== this.chosenCriteria[i]){
        newTesting.push(this.chosenCriteria[i])
      }
    }
    this.chosenCriteria = newTesting; 
  } 

  search(){
   if(this.selectedType === 'genre'){
      this.filterGeneres(this.searchString)
   } else {
    console.log(this.selectedType)
    console.log(this.searchString)
    this.apiService.search(this.selectedType, this.searchString).subscribe((data: any) => {
      this.searchResults = of(data)
      console.log(this.searchResults)
      
    })
   }
  }

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


  // generates an array of genres based on user search
  filterGeneres(input: string): void{
    let searchArr:any[] = [];
    for(let i = 0; i < this.avalibleGenres.length; i++){
        input.toLowerCase()
        if(this.avalibleGenres[i].includes(input)){
          searchArr = [...searchArr, this.avalibleGenres[i]]
        }
    }
    this.filteredGeneres = of(searchArr)
  }
}