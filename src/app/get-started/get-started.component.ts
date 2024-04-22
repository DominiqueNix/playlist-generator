import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  testingChosen: any = [
    'Drake', 
    'Pop', 
    'Here comes the sun'
  ]

  testingArea:any = [
    'Miley Cyrus', 
    'Noah Cyrus', 
    'Billy Ray Cyrus', 
    'Beyonce', 
    'Dua Lipa'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
