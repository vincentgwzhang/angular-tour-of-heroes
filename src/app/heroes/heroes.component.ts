import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',// 调用它，就是调用这个组建, <app-heroes></app-heroes>
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }

  ngOnInit(): void {// ngOnInit() 是一个生命周期钩子
    //组件获取初始数据的好地方
    console.log('HeroesComponent::ngOnInit function running');
  }

  ngOnChanges(): void {
    console.log('HeroesComponent::ngOnChanges function running');
  }

  ngOnDestroy(): void {
    console.log('HeroesComponent::ngOnChanges function running');
  }

}
