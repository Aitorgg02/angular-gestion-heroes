import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { LISTAHEROES} from '../prueba-heroes';
import { Heroe}  from '../heroe';

@Injectable({
  providedIn: 'root',
})

export class GestionarHeroesService {
  constructor() { }
  getHeroes(): Observable<Heroe[]> {
    	return of(LISTAHEROES)};
}	
