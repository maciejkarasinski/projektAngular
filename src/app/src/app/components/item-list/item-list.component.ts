import { DataService } from '../../../../data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../../util/Item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Output() activeItemIdOutput = new EventEmitter<number | null>();

  constructor(public dataService: DataService) { }

  public items: Item[];
  public activeItemId: number = null;

  ngOnInit(): void {
    this.items = this.dataService.getItems();
  }

  onClickItem(i: number | null): void {
    this.activeItemId === i ? this.activeItemId = null : this.activeItemId = i;

    this.activeItemIdOutput.emit(this.activeItemId);
  }

}
