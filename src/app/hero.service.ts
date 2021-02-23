import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';



@Injectable({// Allows us to inject this Hero service throughout our application
  providedIn: 'root', //used as a singleton 
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService: Fetched Heroes')
    return of(HEROES)
  }

  getHero(id: number): Observable<Hero>{
    this.messageService.add(`HeroService: Fetched with id: ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
