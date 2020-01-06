import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public h1Style: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  firstClick(){
    this.h1Style = true;
  }

}
