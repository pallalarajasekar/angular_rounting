import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  newproduct: object;
  
  product = [
    {

      "name": "samsung",
      "model": "M11",
      "price": "18000",
      "color": "blue",
      "memory": "125GB",
      "edit": "fa fa-times",
      "view": "fa fa-eye"
    },
    {

      "name": "Vivo",
      "model": " M15",
      "price": "20000",
      "color": "red",
      "memory": "60GB",
      "edit": "fa fa-times",
      "view": "fa fa-eye"
    },
    {

      "name": "Oppo",
      "model": "M9",
      "price": "8000",
      "color": "block",
      "memory": "60GB",
      "edit": "fa fa-times",
      "view": "fa fa-eye"
    },
    {

      "name": "Realme",
      "model": "M20",
      "price": "25000",
      "color": "blue",
      "memory": "256GB",
      "edit": "fa fa-times",
      "view": "fa fa-eye"
    },

  ]
  dummyObject = {};
  newproductList: any;
  editProductList: any;
  objIndex;
  constructor() { }

  ngOnInit(): void {
    
    this.newproductList = JSON.parse(localStorage.getItem('productObject'));
    this.editProductList = JSON.parse(localStorage.getItem('productEditObject'));
    console.log(this.newproductList);
    if(this.newproductList){
      Object.assign(this.newproductList, { edit: "fa fa-times", view: "fa fa-eye" });
      console.log(this.newproductList);
      this.product.push(this.newproductList);
      console.log(this.product);
      localStorage.removeItem('productObject');
    }else if(this.editProductList){
      Object.assign(this.editProductList, { edit: "fa fa-times", view: "fa fa-eye" });
      console.log(this.editProductList);
      this.objIndex = this.product.findIndex((obj => obj.name == this.editProductList.name));
      console.log(this.objIndex);
      this.product[this.objIndex] = this.editProductList;
      console.log(this.product);
      localStorage.removeItem('productEditObject');
    }
      
    
  }

  productView(viewData: object) {
    console.log(viewData);
    localStorage.setItem('productViewObject', JSON.stringify(viewData));
  }
  productEdit(editData: object) {
    console.log(editData);
    localStorage.setItem('productViewObject', JSON.stringify(editData));
  }

}