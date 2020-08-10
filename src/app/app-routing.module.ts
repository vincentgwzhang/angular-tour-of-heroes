import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';//该应用具有路由功能
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { Lesson6ParentComponent } from './lesson6/lesson6-parent/lesson6-parent.component';
import { MissionControlComponent } from './lesson7/mission-control/mission-control.component';
import { BannerComponent } from './lesson8/banner/banner.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'lesson1', component: Lesson1Component },
  { path: 'lesson2', component: Lesson2Component },
  { path: 'lesson3', component: Lesson3Component },
  { path: 'lesson4', component: Lesson4Component },
  { path: 'lesson5', component: Lesson5Component },
  { path: 'lesson6', component: Lesson6ParentComponent },
  { path: 'lesson7', component: MissionControlComponent },
  { path: 'lesson8', component: BannerComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
