import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-get-specific',
  templateUrl: './get-specific.component.html',
  styleUrls: ['./get-specific.component.css']
})
export class GetSpecificComponent implements OnInit {
  currentRecInput: any; 
  options: any = {
    popularity: null, 
    energy: null, 
    danceability: null,
    acoustics: null 
    
  }

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.recommendationInput.subscribe((data:any) => {
      this.currentRecInput = data.getStartedInput
    })
  }

  sliderChange(e:any){
    this.options[e.target.id] = Math.round(e.target.value)
  }

  generatePlaylist(){
    this.apiService.recommendationInput.next({getStartedInput: this.currentRecInput, getSpecificInput: this.options})
    this.router.navigate(['/playlist'])
  }
}
