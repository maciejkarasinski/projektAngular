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
  }

  toggleFormEdit(): void{
    this.showFormEdit = !this.showFormEdit;
  }

  activeId(event: number | null): void {
    this.itemActiveId = event;
    console.log(this.itemActiveId);
  }

  onItemDelete(): void {
    this.dataService.removeItem(this.itemActiveId);
  }
}
