import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../Shared/Services/cart.service';
import { ItemInterface } from "../../../Shared/types.interface";

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  constructor(private cartService: CartService) { }
  paymentDone = false;
  totalPrice = 0;
  totalItems = 0;
  cartItems = [];
  cartItemsObject = {};

  ngOnInit() {
    this.cartService.getUserCart().subscribe(cart => {
      this.cartItems = (cart as Array<ItemInterface>);
      this.setInfo();
      this.cartItems = this.cartService.removeDuplicates(this.cartItems);
    });
  }

  setInfo() {
    let totalPrice = 0;
    let totalItems = 0;
    this.cartItems.forEach(item => {
      if (item._id in this.cartItemsObject) {
        this.cartItemsObject[item._id].amount += 1;
      } else {
        this.cartItemsObject[item._id] = {
          name: item.name,
          amount: 1,
          price: item.price
        };
      }
      totalPrice += item.price;
      totalItems += 1
    });
    this.totalPrice = totalPrice;
    this.totalItems = totalItems;
  }
}
