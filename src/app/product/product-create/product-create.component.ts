import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  formGroup: FormGroup;
  newProduct: object
  ngOnInit(): void {

    this.buildForm();



  }

  buildForm() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      model: ['', Validators.required],
      price: ['', Validators.required],
      color: ['', Validators.required],
      memory: ['', Validators.required]
    })

  }
  createProduct(){
    this.newProduct = this.formGroup.value;
    localStorage.setItem('productUpdate', "true");
    localStorage.setItem('productObject', JSON.stringify(this.newProduct));
    console.log(this.newProduct);
  }
}