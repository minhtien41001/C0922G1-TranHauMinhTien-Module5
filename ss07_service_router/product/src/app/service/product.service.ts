import { Injectable } from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];
  constructor() { }

  getAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  getProduct(id: number){
    return this.products.filter(it => it.id === id )[0]
  }

  update(id:number,productUpdate:Product){
    let product: Product = this.getProduct(id);
    product.name = productUpdate.name;
    product.price = productUpdate.price;
    product.description = productUpdate.description;
  }

  remove(id:number){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id){
        this.products.splice(i,1);
      }
    }
  }
}
