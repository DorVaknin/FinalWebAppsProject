import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../Shared/Services/cart.service';
import {ItemInterface} from "../../../Shared/types.interface";

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  constructor(private cartService: CartService) { }
  paymentDone = false;

  ngOnInit() {
  }

  get totals(){
    let totalPrice = 0;
    let totalItems = 0;
    for (let [_ ,item] of Object.entries(this.cartService.items)) {
      const currentItem = (<ItemInterface>item);
      totalPrice +=  currentItem.price * currentItem.amountInCart;
      totalItems += currentItem.amountInCart;
    }
    return {totalPrice, totalItems};
  }

}
