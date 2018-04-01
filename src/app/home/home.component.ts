import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { MaterializeAction } from "angular2-materialize";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('carouselSmall') carouselSmall;
  @ViewChild('carouselWords1') carouselWords1;
  @ViewChild('carouselWords2') carouselWords2;
  @ViewChild('carouselWordsDepoimentos') carouselWordsDepoimentos;
  actions = new EventEmitter<string|MaterializeAction>();

  constructor() { }

  ngOnInit() {
  }

}
