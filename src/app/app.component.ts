import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showForm = false;
  public showFormEdit = false;
  public itemActiveId: number | null = null;

  constructor(public dataService: DataService) { }

  toggleForm(): void{
    this.showForm = !this.showForm;
    this.itemActiveId = null;
  }

  toggleFormEdit(): void{
    this.showFormEdit = !this.showFormEdit;
  }

  activeId(event: number | null): void {
    this.itemActiveId = event;
  }

  onItemDelete(): void {
    this.dataService.removeItem(this.itemActiveId);
    this.itemActiveId = null;
  }

  OnEditFormClose(): void {
    this.showFormEdit = false;
    this.itemActiveId = null;
  }

  sortDescription(): void {
    this.dataService.sortItems('description');
  }

  sortName(): void {
    this.dataService.sortItems('name');
  }

  sortPrice(): void {
    this.dataService.sortItems('price');
  }
}
