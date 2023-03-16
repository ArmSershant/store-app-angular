import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { FormsModule } from '@angular/forms';
import { SavedproductComponent } from './savedproduct/savedproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TruncatePipe,
    AllproductsComponent,
    ProductdetailsComponent,
    EditproductComponent,
    SavedproductComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
