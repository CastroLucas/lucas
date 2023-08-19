import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FogoDomComponent } from './fogo-dom/fogo-dom.component';
import { TablePrimengComponent } from './table-primeng/table-primeng.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button'; // Importar o módulo de botões
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';


@NgModule({
  declarations: [
    AppComponent,
    FogoDomComponent,
    TablePrimengComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
