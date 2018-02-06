import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	@ViewChild('menuCollapse') menuCollapse: ElementRef;

	constructor(private renderer: Renderer) { }

	onClickSideNav() {
		let el: HTMLElement = this.menuCollapse.nativeElement as HTMLElement;
		el.click()
	}
}
