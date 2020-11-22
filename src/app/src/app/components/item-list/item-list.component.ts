import { DataService } from '../../../../data.service';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from '../../../../util/Item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnChanges {
  @Output() activeItemIdOutput = new EventEmitter<number | null>();

  constructor(public dataService: DataService) { }

  public items: Item[];
  @Input () public activeItemId: number = null;

  ngOnInit(): void {
    this.items = this.dataService.getItems();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onClickItem(i: number | null): void {
    this.activeItemId === i ? this.activeItemId = null : this.activeItemId = i;

    this.activeItemIdOutput.emit(this.activeItemId);
  }

}
