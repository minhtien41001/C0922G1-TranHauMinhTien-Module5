import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  categoryList: Category[] = [];
  temp: Product = {
    id: 0
  };

  constructor(private productService: ProductService,
              private router: Router) {
    this.getAll();
    this.getAllCategory();
  }

  ngOnInit(): void {
  }

  getAll() {
    this.productService.getAll().subscribe(product => {
      this.productList = product;
    })
  }

  getAllCategory() {
    this.getAll();
    this.productService.getAllCategory().subscribe(category => {
      this.categoryList = category;
    })
  }

  deleteProduct() {
    if (this.temp.id != null) {
      this.productService.deleteProduct(this.temp.id).subscribe(data => {
        this.getAll()
        alert("Delete success")
      }, error => {

      }, () => {

      })
    }
  }

  searchProduct(name: string, description: string, category:string){
    this.productService.searchProduct(name, description, category).subscribe(data =>{
      this.productList = data;
    })
  }
}
