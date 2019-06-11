import { Component } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent {
  products: any = [
    {
      name: "Moto G5",
      quantity: 5
    },
    {
      name: "OnePlus 6",
      quantity: 10
    }
  ];

  onSubmit(nameAndQantity) {
    this.products.push(nameAndQantity.form.value);
  }
}
