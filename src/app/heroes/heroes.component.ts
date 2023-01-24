import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
import {GestionarHeroesService} from '../servicios/gestionar-heroes.service';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  heroes : Heroe[];
  selectedHeroe: Heroe;
  
  constructor(private heroeServicio: GestionarHeroesService) { }

  getHeroes(): void {
     this.heroeServicio.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
   ngOnInit() {
      this.getHeroes();
  }
   onSelect(heroe: Heroe): void {
    this.selectedHeroe = heroe;
  }
}
