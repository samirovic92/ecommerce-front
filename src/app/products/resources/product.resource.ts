import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductResource {

  private product_base_url = `${environment.productUrl}/api/v1/products`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.product_base_url);
  }
}
