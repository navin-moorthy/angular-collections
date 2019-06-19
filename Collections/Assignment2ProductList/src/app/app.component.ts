import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  productCompany: any = "Amazon";

  newlyAddedProduct: any = {};

  onNewProduct({ name, quantity }) {
    this.newlyAddedProduct.name = name;
    this.newlyAddedProduct.quantity = quantity;
  }
}
