import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'store-app';
  constructor(private productService: ProductService) {}
  public categories: Observable<string[]> = this.productService.getCategories();
}
