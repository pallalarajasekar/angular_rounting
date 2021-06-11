import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  formGroup: FormGroup;
  editProducts: object
  viewProduct: any
  ngOnInit(): void {

    this.viewProduct = JSON.parse(localStorage.getItem('productViewObject'));

    this.buildForm();

  }

  buildForm() {
    this.formGroup = this.fb.group({
      name: [this.viewProduct.name, Validators.required],
      model: [this.viewProduct.model, Validators.required],
      price: [this.viewProduct.price, Validators.required],
      color: [this.viewProduct.color, Validators.required],
      memory: [this.viewProduct.memory, Validators.required]
    })

  }

  editProduct(){
    this.editProducts = this.formGroup.value;
    localStorage.setItem('productEditObject', JSON.stringify(this.editProducts));
    console.log(this.editProducts);
  }

}
