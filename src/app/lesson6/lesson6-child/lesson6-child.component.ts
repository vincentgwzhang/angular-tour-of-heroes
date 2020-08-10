import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson6-child',
  templateUrl: './lesson6-child.component.html',
  styleUrls: ['./lesson6-child.component.scss']
})
export class Lesson6ChildComponent implements OnInit {

  message: string[] = [];

  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  method1(msg: string) {
    this.message.push(msg);
    this.counter = this.counter + 1;
  }

}
