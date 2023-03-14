import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;

   id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
       this.id = parseInt(next.get('id'));
       this.productService.findById(this.id).subscribe(data=>{
         this.productForm.patchValue(data);

       })
      this.productForm = new FormGroup({
          id: new FormControl(),
          name: new FormControl(),
          price: new FormControl(),
          description: new FormControl(),
        });
    });

  }

  ngOnInit(): void {

  }

  update() {
    let product:Product = this.productForm.value;
    return this.productService.updateProduct(product).subscribe(next=>{
      this.router.navigateByUrl("/product/list")
    });
  }
}
