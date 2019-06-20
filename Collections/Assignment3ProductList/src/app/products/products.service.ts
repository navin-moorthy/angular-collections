import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  serverUrl = "http://35.154.61.191:8081/products";

  getProducts() {
    return this.http.get<any>(this.serverUrl);
  }

  updateProduct(newProduct) {
    return this.http.post<any>(this.serverUrl, newProduct);
  }
}
