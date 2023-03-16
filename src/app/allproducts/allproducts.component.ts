import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
})
export class AllproductsComponent {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  public allProducts: Observable<Product[]> =
    this.productService.getAllProducts();
  onDelete(product: any) {
    // this.allProducts.filter((prod) => prod.id !== product.id);
    this.productService.deleteProduct(product);
  }
}
