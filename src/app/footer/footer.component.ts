import { Component, OnInit, EventEmitter, ViewChild, Input } from '@angular/core';
import { MaterializeAction } from "angular2-materialize";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() showContact: string;
  showContactBool: boolean;

  constructor() { }

  ngOnInit() {
    if (this.showContact === "false") {
      this.showContactBool = false;
    } else {
      this.showContactBool = true;
    }
  }

}
