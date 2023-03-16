import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css'],
})
export class EditproductComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
  onSubmit(form: NgForm) {
    let newProduct = new Product(
      form.value.id,
      form.value.title,
      form.value.price,
      form.value.category,
      form.value.description,
      form.value.image
    );
    console.log(newProduct);
    this.productService
      .editProduct(newProduct.id, newProduct)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/products/' + data.id]);
      });
  }
}
