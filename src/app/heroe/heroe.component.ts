import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

@Component({ //Decorator to provide metadata
  selector: 'app-heroe', // <app-heroe>
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit { //export allows for other areas of our app to import it
  heroes: Hero[];
  // selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {// for initalization functionality
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes()
      .subscribe(heroes => (this.heroes = heroes))
  }

  // onSelect(hero: Hero){
  //   this.selectedHero = hero;
  //   console.log(this.selectedHero);
  // }

}
