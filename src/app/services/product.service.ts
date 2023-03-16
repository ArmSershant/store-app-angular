import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(
      `https://fakestoreapi.com/products/categories`
    );
  }
  getProducts(name: string): Observable<Product[]> {
    return this.http.get<any>(
      `https://fakestoreapi.com/products/category/${name}`
    );
  }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<any>(`https://fakestoreapi.com/products`);
  }
  getProduct(id: string): Observable<Product> {
    return this.http.get<any>(`https://fakestoreapi.com/products/${id}`);
  }
  editProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<any>(
      `https://fakestoreapi.com/products/${id}`,
      product
    );
  }
  savedProduct() {}
  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.patch<any>(
      `https://fakestoreapi.com/products/${id}`,
      product
    );
  }
  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<any>(
      `https://fakestoreapi.com/products/${product.id}`
    );
  }
}
