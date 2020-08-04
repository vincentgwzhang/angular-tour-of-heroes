//Angular 需要知道如何把应用程序的各个部分组合到一起，以及该应用需要哪些其它文件和库。
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';// 引入一切
import { FormsModule } from '@angular/forms';// 引入ngModel, 双向绑定

import { AppComponent } from './app.component';

//每个组件都必须声明在（且只能声明在）一个 NgModule 中。
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent//每个组件都必须声明在（且只能声明在）一个 NgModule 中。
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
