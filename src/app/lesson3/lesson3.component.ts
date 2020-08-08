import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component implements OnInit {

  currentItem: Item = new Item('Teapot');
  clickMessage = '';

  onSave(event?: KeyboardEvent) {
    const evtMsg = event ? ' Event target is ' + (<HTMLElement>event.target).textContent : '';
    alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); }
  }

  deleteItem(item: Item) {
    alert(`Delete the ${item.name}.`);
  }

  onClickMe(event?: KeyboardEvent) {
    const evtMsg = event ? ' Event target class is ' + (<HTMLElement>event.target).className  : '';
    alert('Click me.' + evtMsg);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
