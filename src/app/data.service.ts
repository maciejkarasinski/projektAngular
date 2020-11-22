import { Item } from './util/Item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private items: Item[] = [];
  private orderCresc = false;

  constructor() {
    if (localStorage.getItem('data-angular-project')){
    this.items = JSON.parse(localStorage.getItem('data-angular-project'));
    } else {
      this.items = [
        {name: 'Truskawki', description: 'Truskawki prosto z pola', imgLink: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', price: 20},
        {name: 'Jagody', description: 'Jagody prosto z lasu', imgLink: 'https://images.unsplash.com/photo-1425934398893-310a009a77f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80', price: 30},
        {name: 'Jabłka', description: 'Jabłka prosto z sadu', imgLink: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', price: 10},
      ];
    }
   }

  public getItems(): Item[] {
    return this.items;
  }

  public getItem(id: number): Item {
    return this.items[id];
  }

  public addItem(item: Item): void {
    this.items.push(item);
    localStorage.setItem('data-angular-project', JSON.stringify(this.items));
  }

  public updateItem(id: number, item: Item): void {
    this.items[id].name = item.name;
    this.items[id].description = item.description;
    this.items[id].imgLink = item.imgLink;
    this.items[id].price = item.price;

    localStorage.setItem('data-angular-project', JSON.stringify(this.items));
  }

  public removeItem(id: number): void {
    this.items.splice(id, 1);

    localStorage.setItem('data-angular-project', JSON.stringify(this.items));
  }

  public sortItems(property: string): void {
    this.orderCresc = !this.orderCresc;

    if ( property === 'price') {
      this.orderCresc ? this.items.sort((a, b) => a.price - b.price) : this.items.sort((a, b) => b.price - a.price);
    }

    if ( property === 'description') {
      this.orderCresc ?
      this.items.sort((a, b) => a.description.localeCompare(b.description)) :
      this.items.sort((a, b) => b.description.localeCompare(a.description));
    }

    if ( property === 'name') {
      this.orderCresc ?
      this.items.sort((a, b) => a.name.localeCompare(b.name)) :
      this.items.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  public priceFilter(min: number, max: number): Item[] {
    const filteredArray = this.items.filter((item) => {
      return item.price > min && item.price < max;
    });
    return filteredArray;
  }
}
