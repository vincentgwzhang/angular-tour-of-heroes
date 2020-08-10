import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { C1Component } from '../c1/c1.component';
import { C2Component } from '../c2/c2.component';
import { AdDirective } from '../ad.directive';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  showComponent1() {
    const resolver = this.componentFactoryResolver.resolveComponentFactory(C1Component);// 创建 component 的 instance

    const viewContainerRef = this.adHost.viewContainerRef;// 找到要摆进去的位置
    viewContainerRef.clear(); // 清空该位置

    const componentRef = viewContainerRef.createComponent(resolver);//渲染
    (<C1Component>componentRef.instance).data = 'this is C1 component, created by dynamic';//这步不属于创建的步骤
  }

  showComponent2() {
    const resolver = this.componentFactoryResolver.resolveComponentFactory(C2Component);

    const viewContainerRef1 = this.adHost.viewContainerRef;
    viewContainerRef1.clear();

    const componentRef = viewContainerRef1.createComponent(resolver);
    (<C2Component>componentRef.instance).data = 'this is C2 component, created by dynamic';
  }

}
