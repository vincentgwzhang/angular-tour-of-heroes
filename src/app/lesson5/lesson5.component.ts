import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-lesson5',
  templateUrl: './lesson5.component.html',
  styleUrls: ['./lesson5.component.scss']
})
export class Lesson5Component implements OnInit {

  color = 'green';

  heroes: Hero[];

  hero: Hero;

  constructor() {
    this.heroes = HEROES;
  }

  ngOnInit(): void {
  }

  onChangeSelect() : void{
    // Every time select, the hero will change
    console.log(this.hero.id);
  }

}
