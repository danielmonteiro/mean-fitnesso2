import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { toast } from 'angular2-materialize';

import { ContactService } from './contact.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

	public myForm: FormGroup;

	constructor(private contactService: ContactService) { }

	ngOnInit() {

		this.myForm = new FormGroup({
			name: new FormControl(null, Validators.required),
			email: new FormControl(null, [
				Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
			]),
			phone: new FormControl(),
			message: new FormControl(null, Validators.required)
		});
	}

	onSubmit() {

		if ((this.myForm.value.email == null || this.myForm.value.email.trim() == "") && (this.myForm.value.phone == null || this.myForm.value.phone.trim() == "")) {
			toast('Por gentileza preencha o campo e-mail ou telefone', 5000);

		} else {

			this.myForm.disable;
			this.contactService.saveContact(this.myForm.value.name, this.myForm.value.email, this.myForm.value.phone, this.myForm.value.message)
				.subscribe(
				data => {
					toast('Sua mensagem foi enviada com sucesso! Obrigado por nos contactar, retornaremos em breve.', 5000);
					this.myForm.reset();
				},
				error => {
					console.log(error);
				}
				);
		}
	}

}
