import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.scss']
})
export class Lesson1Component implements OnInit {

  @ViewChild('bindingInput') bindingInput: ElementRef;// 这里代表一个控件，例如 input

  isDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  isUnchanged = true;

  getHTMLAttributeValue(): any {
    console.warn('这个，是 HTML attribute, 永远不变: ' + this.bindingInput.nativeElement.getAttribute('value'));// 这个，是 HTML attribute, 永远不变
  }

  getDOMPropertyValue(): any {
    console.warn('DOM property value: ' + this.bindingInput.nativeElement.value);//
  }

  working(): any {
    let testButton = <HTMLInputElement> document.getElementById('testButton');
    console.log(testButton.getAttribute('AAVV'));
  }

  toggleDisabled(): any {

    let testButton = <HTMLInputElement> document.getElementById('testButton');
    this.isDisabled = !this.isDisabled;
    testButton.disabled = this.isDisabled;// 这是 DOM 的 property
    // 这是 HTML 的 attribute: testButton.getAttribute('disabled');
    console.warn(testButton.disabled);
  }

}
