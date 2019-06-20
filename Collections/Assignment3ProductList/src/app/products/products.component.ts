import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { ProductService } from "./products.service";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  constructor(public productService: ProductService) {}

  @Input() company: string;
  @Output() newProduct = new EventEmitter<object>();

  products: any = [];

  ngOnInit() {
    this.productService.getProducts().subscribe(
      result => {
        result.forEach(product => {
          this.products.push(product);
        });
      }, // success path
      error => console.log(error) // error path
    );
  }

  onSubmit(nameAndQantity) {
    this.newProduct.emit(nameAndQantity.form.value);
    this.productService
      .updateProduct(nameAndQantity.form.value)
      .subscribe(data => this.products.push(data));
  }
}
