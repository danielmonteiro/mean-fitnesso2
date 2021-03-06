import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ContactService {

	public showContact = true;

	constructor(private http: Http) { }

	saveContact(name, email, phone, message, heard = null, reply = null) {
		let body = JSON.stringify({ name: name, email: email, phone: phone, message: message, heard: heard, reply: reply });
		let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
		return this.http.post("/contato", body, { headers: headers })
			.map((response: Response) => response.json())
			.catch((error: Response) => Observable.throw(error.json()));
	}

}
