import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent {
  @Input() company: string;

  products: any = [
    {
      name: "Moto G5",
      quantity: 2
    },
    {
      name: "Racold Geyser",
      quantity: 3
    }
  ];

  @Output() newProduct = new EventEmitter<object>();

  onSubmit(nameAndQantity) {
    this.newProduct.emit(nameAndQantity.form.value);
    this.products.push(nameAndQantity.form.value);
  }
}
