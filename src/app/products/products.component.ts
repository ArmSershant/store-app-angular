import { Component } from '@angular/core';
import { ProductService } from './../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  public products: Product[] = [];
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productService
        .getProducts(String(params['name']))
        .subscribe((data: Product[]) => {
          this.products = data;
          console.log(data);
        });
    });
  }
  onDelete(product: any) {
    this.products = this.products.filter((prod) => prod.id !== product.id);
    this.productService.deleteProduct(product);
  }
}
