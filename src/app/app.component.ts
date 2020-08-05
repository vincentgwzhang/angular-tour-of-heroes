import { Component, OnInit, OnDestroy, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit {
  title = 'Tour of Heroes';

  ngOnInit(): void {// ngOnInit() 是一个生命周期钩子
    //组件获取初始数据的好地方
    console.log('Step 1: AppComponent::ngOnInit function running');
  }

  ngAfterContentInit() {
    console.log('Step 2: AppComponent::ngAfterContentInit function running');
  }

  ngAfterContentChecked() {
    //console.log('Step 3: AppComponent::ngAfterContentChecked function running');// 当，类如双向绑定的时候就会触发
  }

  ngAfterViewInit() {
    console.log('Step 4: AppComponent::ngAfterViewInit');
  }

  ngAfterViewChecked() {
    //console.log('Step 5: AppComponent::ngAfterViewChecked');// 当，类如双向绑定的时候就会触发
  }

  ngOnDestroy() {
    console.log('AppComponent::ngOnChanges function running');
  }
}
