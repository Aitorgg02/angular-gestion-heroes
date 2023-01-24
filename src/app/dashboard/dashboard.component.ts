import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
import { GestionarHeroesService } from '../servicios/gestionar-heroes.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Heroe[] = [];
 
  constructor(private gestionarHeroesService: GestionarHeroesService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.gestionarHeroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
