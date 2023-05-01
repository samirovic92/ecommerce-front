import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './pages/products/products.component';
import {ProductDetailsComponent} from './pages/product-details/product-details.component';
import {SharedModule} from "../shared/shared.module";
import {ProductsListComponent} from './components/products-list/products-list.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductsListComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
