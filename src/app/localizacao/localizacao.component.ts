import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.css']
})
export class LocalizacaoComponent implements OnInit {

	public lat: number = -23.222508;
	public lng: number = -45.888061;
	public zoom: number = 18;

  constructor() { }

  ngOnInit() {
  }

}
