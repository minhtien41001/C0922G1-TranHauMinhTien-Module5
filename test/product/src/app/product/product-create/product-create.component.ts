import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categoryList: Category[] = [];
  productForm: FormGroup;

  constructor(private productService: ProductService,
              private router: Router) {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    })
  }

  ngOnInit(): void {
    this.productService.getAllCategory().subscribe(data =>{
      this.categoryList = data;
    })
  }

  submit(){
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(data =>{
      alert("them moi thanh cong")
      this.router.navigateByUrl("")
    })
  }

}
