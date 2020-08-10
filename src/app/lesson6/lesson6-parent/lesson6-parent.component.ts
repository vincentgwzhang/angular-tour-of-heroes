import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Lesson6ChildComponent } from '../lesson6-child/lesson6-child.component';

@Component({
  selector: 'app-lesson6-parent',
  templateUrl: './lesson6-parent.component.html',
  styleUrls: ['./lesson6-parent.component.scss']
})
export class Lesson6ParentComponent implements OnInit {

  //This is second solution, name in the backend
  @ViewChild('msgInput') msgInput: ElementRef;
  @ViewChild(Lesson6ChildComponent) childComponent: Lesson6ChildComponent;

  constructor() { }

  ngOnInit(): void {
  }

  callMethod1() {
    let message = this.msgInput.nativeElement.value;
    this.childComponent.method1(message);
  }

}
