import { DataService } from '../../../../data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    imgLink: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern('^[-.0-9]+$')]),
  });

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('form submit');
    this.dataService.addItem({
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      imgLink: this.form.get('imgLink').value,
      price: this.form.get('price').value
    });
  }

  onCancel(): void {
    this.form.reset();
  }
}
