import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  public product!: Product;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productService
        .getProduct(String(params['id']))
        .subscribe((data: Product) => {
          this.product = data;
          console.log(data);
        });
    });
  }
}
