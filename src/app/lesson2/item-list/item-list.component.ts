import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../Item';
import { ITEMS } from '../mock-items';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  listItems = ITEMS;
  @Input() items: Item[];

  constructor() { }

  ngOnInit(): void {
  }

}
