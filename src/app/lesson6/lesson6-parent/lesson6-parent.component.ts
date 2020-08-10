import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-lesson6-parent',
  templateUrl: './lesson6-parent.component.html',
  styleUrls: ['./lesson6-parent.component.scss']
})
export class Lesson6ParentComponent implements OnInit {

  @ViewChild('bindingInput') bindingInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addOneMessage() {
    let message = this.bindingInput.nativeElement.value;
    
  }

}
