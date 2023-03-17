import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = "http://localhost:3000/products"

  API_URL_CATEGORY = `http://localhost:3000/categories`
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.API_URL);
  }

  getAllCategory(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.API_URL_CATEGORY);
  }

  deleteProduct(id: number): Observable<Product>{
    return this.httpClient.delete<Product>(this.API_URL+ "/" + id);
  }

  saveProduct(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(this.API_URL,product)
  }

  findById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(this.API_URL + "/" + id);
  }

  updateProduct(id: number,product: Product): Observable<Product>{
    return this.httpClient.patch<Product>(this.API_URL + "/"+ id,product);
  }

  searchProduct(name: string,description: string,category: string): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.API_URL + "?name_like=" + name + "&description_like=" + description + "&category.name_like=" + category )
  }
}
