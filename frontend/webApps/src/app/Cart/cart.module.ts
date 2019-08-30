import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CartPageComponent } from './components/cart-page/cart-page.component';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [CartPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '' , component: CartPageComponent }
    ])
  ]
})
export class CartModule { }
