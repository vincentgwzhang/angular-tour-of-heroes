import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import {Hero} from '../hero';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

    @Input() set appUnless(hero: Hero) {
      if (!hero) this.viewContainer.clear();
      
      if (hero.id===20 && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (hero.id!==20 && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    }

}
