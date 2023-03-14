import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  temp: Product = {};
  p= 1;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.productService.getAll().subscribe(product => {
      this.products = product;
    });
  }

  remove(id: number) {
    this.productService.deleteProduct(id);
  }

  deleteProduct() {
    if (this.temp.id != null) {
      this.productService.deleteProduct(this.temp.id).subscribe(data => {
        this.getAll()
        alert("Xoa thanh cong")
      })
    }
  }
}
