import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-savedproduct',
  templateUrl: './savedproduct.component.html',
  styleUrls: ['./savedproduct.component.css'],
})
export class SavedproductComponent {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  product!: Product;
  ngOnInit() {
    return this.productService.getProduct(this.product.id);
  }
}
