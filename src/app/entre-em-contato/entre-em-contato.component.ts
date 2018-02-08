import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { toast } from 'angular2-materialize';

import { ContactService } from './../contato/contact.service';

@Component({
  selector: 'app-entre-em-contato',
  templateUrl: './entre-em-contato.component.html',
	styleUrls: ['./entre-em-contato.component.css']
})
export class EntreEmContatoComponent implements OnInit {

	public myForm: FormGroup;
	public heardOptions = [
		{ value: 'Facebook' },
		{ value: 'Instagram' },
		{ value: 'Indicação' },
		{ value: 'Internet' }
	];
	public replyOptions = [
		{ value: 'Telefone' },
		{ value: 'Email' },
		{ value: 'WhatsApp' }
	];
	public selectedHeard;
	public selectedReply;

	public lat: number = -23.222508;
	public lng: number = -45.888061;
	public zoom: number = 18;

	constructor(private contactService: ContactService) { }

	ngOnInit() {

		this.myForm = new FormGroup({
			name: new FormControl(null, Validators.required),
			email: new FormControl(null, [
				Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
			]),
			phone: new FormControl(),
			heard: new FormControl(),
			reply: new FormControl(),
			message: new FormControl(null, Validators.required)
		});
	}

	onSubmit() {

		if ((this.myForm.value.email == null || this.myForm.value.email.trim() == "") && (this.myForm.value.phone == null || this.myForm.value.phone.trim() == "")) {
			toast('Por gentileza preencha o campo e-mail ou telefone', 5000);

		} else {

			this.myForm.disable;
			this.contactService.saveContact(
				this.myForm.value.name, 
				this.myForm.value.email, 
				this.myForm.value.phone, 
				this.myForm.value.message, 
				this.myForm.value.heard,
				this.myForm.value.reply)
				.subscribe(
				data => {
					console.log("Success!");
					toast('Sua mensagem foi enviada com sucesso! Obrigado por nos contactar, retornaremos em breve.', 5000);
					console.log("Toasted!");
					this.myForm.reset();
					console.log("Reseted!");
				},
				error => {
					console.log(error);
				}
				);
		}
	}

}
