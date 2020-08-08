import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'app-lesson3-item-detail',
  templateUrl: './lesson3-item-detail.component.html',
  styleUrls: ['./lesson3-item-detail.component.scss']
})
export class Lesson3ItemDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() item;
  itemImageUrl = 'assets/phone.png';
  lineThrough = '';
  displayNone = '';
  @Input() prefix = '';

  // This component makes a request but it can't actually delete a hero.
  @Output() deleteRequest = new EventEmitter<Item>();

  delete() {
    this.deleteRequest.emit(this.item);
    this.displayNone = this.displayNone ? '' : 'none';
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }

}
