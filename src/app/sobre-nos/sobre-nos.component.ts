import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { MaterializeAction } from "angular2-materialize";

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

  @ViewChild('carousel') carousel;
  @ViewChild('carouselSmall') carouselSmall;
  @ViewChild('carouselWords1') carouselWords1;
  actions = new EventEmitter<string | MaterializeAction>();

  constructor() { }

  ngOnInit() {
  }

}
