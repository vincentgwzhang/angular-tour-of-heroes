import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnChanges {

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  // 一旦传入的 Input() hero 有改变，这个函数就会被触发. component 第一次调用的时候也是会触发的
  ngOnChanges(changes: SimpleChanges) {
    let previousHero: Hero = changes['hero'].previousValue;
    let currentHero: Hero = changes['hero'].currentValue;

    // 注意，一开始的时候依然会调用这个 ngOnChanges 函数，所以一开始不一定会有值
    if (previousHero !== undefined && currentHero !== undefined) {
      console.log('HeroDetailComponent::ngOnChanges called, origin: ' + previousHero.name + 'current:' + currentHero.name);
    }
  }

}
