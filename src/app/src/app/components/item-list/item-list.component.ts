import { DataService } from '../../../../data.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../../../util/Item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(public dataService: DataService) { }

  public items: Item[];

  ngOnInit(): void {
    this.items = this.dataService.getItems();
  }

}
