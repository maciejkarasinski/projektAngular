import { Injectable } from '@angular/core';
import { Item } from '../app/util/Item';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private items: Item[] = [
    {name: 'Truskawki', description: 'Truskawki prosto z pola', imgLink: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', price: 20},
    {name: 'Jagody', description: 'Jagody prosto z lasu', imgLink: 'https://images.unsplash.com/photo-1425934398893-310a009a77f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80', price: 30},
    {name: 'Jabłka', description: 'Jabłka prosto z sadu', imgLink: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', price: 10},
  ];

  private activeItemId: number | null = null;

  constructor() { }

  public getItemId(): number | null {
    return this.activeItemId;
  }

  public setItemId(id: number | null): void {
    this.activeItemId = id;
  }

  public getItems(): Item[] {
    return this.items;
  }

  public getItem(id: number): Item {
    return this.items[id];
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public updateItem(id: number, item: Item): void {
    this.items[id].name = item.name;
    this.items[id].description = item.description;
    this.items[id].imgLink = item.imgLink;
    this.items[id].price = item.price;
  }

  public removeItem(id: number): void {
    this.items.splice(id, 1);
  }
}
