import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
   product: Product;
   id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
       this.id = parseInt(next.get('id'));
      this.product = productService.getProduct(this.id)
      this.productForm = new FormGroup({
          id: new FormControl(),
          name: new FormControl(),
          price: new FormControl(),
          description: new FormControl(),
        });
      this.productForm.patchValue(this.product);
    });

  }

  ngOnInit(): void {

  }

  update(){
    let product: Product = this.productForm.value;
    this.productService.update(this.id,product);
    this.router.navigateByUrl("/product/list");
  }
}
