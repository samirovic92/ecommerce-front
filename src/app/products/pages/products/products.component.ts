import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$ : Observable<Product[]> = of([]);

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts() {
    this.products$ = this.productService.getProducts()
  }

}
