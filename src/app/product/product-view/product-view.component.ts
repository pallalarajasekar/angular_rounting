import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor() { }
  viewProduct: any
  name: string;
  model: string;
  price: string;
  color: string;
  memory: string;
  ngOnInit(): void {

    this.viewProduct = JSON.parse(localStorage.getItem('productViewObject'));
    this.name = this.viewProduct.name;
    this.model = this.viewProduct.model;
    this.price = this.viewProduct.price;
    this.color = this.viewProduct.color;
    this.memory = this.viewProduct.memory;
    console.log(this.viewProduct);
  }

}
