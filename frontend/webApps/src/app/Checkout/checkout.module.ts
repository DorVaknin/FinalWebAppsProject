import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import {CheckoutPageComponent} from "./components/checkout-page/checkout-page.component";
import {SharedModule} from "../Shared/shared.module";

@NgModule({
  declarations: [CheckoutPageComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{path: '' , component: CheckoutPageComponent}])
  ]
})
export class CheckoutModule { }
