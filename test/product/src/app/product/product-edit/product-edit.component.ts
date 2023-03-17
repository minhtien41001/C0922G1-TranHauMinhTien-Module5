import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/category";
import {Form, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  categoryList: Category[] = [];

  productUpdateForm: FormGroup;

  public compareWith(object1: Category, object2: Category): boolean {
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
    this.productUpdateForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get("id")
      if (id != null){
        this.getProduct(+id)
      }
    })
  }

  ngOnInit(): void {
    this.productService.getAllCategory().subscribe(data =>{
      this.categoryList = data;
    })
  }

  getProduct(id: number){
    return this.productService.findById(id).subscribe(data =>{
      this.productUpdateForm.patchValue(data)
    });
  };

  submitUpdate(){
    const product = this.productUpdateForm.value;
    this.productService.updateProduct(product.id,product).subscribe(data => {
      this.router.navigate([""])
    })
  }
}
