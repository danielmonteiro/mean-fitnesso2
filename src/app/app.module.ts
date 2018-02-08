import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapsibleModule } from 'angular2-collapsible';

import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { ContactService } from './contato/contact.service';
import { ContatoComponent } from './contato/contato.component';
import { EntreEmContatoComponent } from './entre-em-contato/entre-em-contato.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { MaterializeModule } from 'angular2-materialize';
import { routing } from './app.routing';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

@NgModule({
  declarations: [
    AppComponent,
		ContatoComponent,
		EntreEmContatoComponent,
    LocalizacaoComponent,
    HomeComponent,
    SobreNosComponent
  ],
  imports: [
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyADQBsr0Qqs3lhCXOd63NYMFvB2eHdaa_A'
		}),
		BrowserAnimationsModule,
		BrowserModule,
		CollapsibleModule,
		FormsModule,
		HttpModule,
		MaterializeModule,
		ReactiveFormsModule,
    routing
  ],
  providers: [
		ContactService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
