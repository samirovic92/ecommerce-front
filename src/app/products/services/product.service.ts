import {Injectable} from '@angular/core';
import {Product} from "../models/product";
import {ProductResource} from "../resources/product.resource";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private productResource: ProductResource) {
  }

  getProducts = (): Observable<Product[]> => this.productResource.getProducts();
}
