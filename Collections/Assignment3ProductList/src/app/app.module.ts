import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { ProductService } from "./products/products.service";

@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {}
