import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { SavedproductComponent } from './savedproduct/savedproduct.component';

const routes: Routes = [
  { path: 'products', component: AllproductsComponent },
  { path: 'products/category/:name', component: ProductsComponent },
  { path: 'products/:id', component: ProductdetailsComponent },
  { path: 'products/edit/:id', component: EditproductComponent },
  { path: 'products/saved/:id', component: SavedproductComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
