import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroeDetalleComponent } from './heroe-detalle/heroe-detalle.component';
import { GestionarHeroesService } from './servicios/gestionar-heroes.service';
import { MensajesComponent } from './mensajes/mensajes.component';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeDetalleComponent,
    MensajesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    GestionarHeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
