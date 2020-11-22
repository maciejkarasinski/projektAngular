import { Item } from './../../../../util/Item';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DataService } from '../../../../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges {
  @Input() itemId;
  @Output() closeWindow = new EventEmitter<boolean>();

  itemToEdit: Item = null;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    imgLink: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern('^[-.0-9]+$')]),
  });

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.itemToEdit = this.dataService.getItem(this.itemId);
    this.form.controls.name.setValue(this.itemToEdit.name);
    this.form.controls.description.setValue(this.itemToEdit.description);
    this.form.controls.imgLink.setValue(this.itemToEdit.imgLink);
    this.form.controls.price.setValue(this.itemToEdit.price);
}

  onSubmit(): void {
    this.dataService.updateItem(this.itemId , {
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      imgLink: this.form.get('imgLink').value,
      price: this.form.get('price').value
    });
    this.closeWindow.emit(true);
  }

  onCancel(): void {
    this.form.reset();
    this.closeWindow.emit(true);
  }
}
