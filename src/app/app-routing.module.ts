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
import { DevuiComponent } from './devui/devui.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'lesson1', component: Lesson1Component },
  { path: 'lesson2', component: Lesson2Component },
  { path: 'lesson3', component: Lesson3Component },
  { path: 'lesson4', component: Lesson4Component },
  { path: 'lesson5', component: Lesson5Component },
  { path: 'devui', component: DevuiComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
