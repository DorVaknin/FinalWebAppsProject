import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../../Shared/Services/cart.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit, OnDestroy {
  cartItems = {};
  cartChanged = new Subject();

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.items;
    this.cartChanged.subscribe(() => this.cartItems = this.cartService.items);
  }

  removeItem(itemId){
    this.cartService.deleteItem(itemId);
    this.cartChanged.next();
  }

  deduceOne(itemId){
    this.cartService.deduceOne(itemId);
    this.cartChanged.next();
  }

  addOne(itemId){
    this.cartService.addItem(itemId);
    this.cartChanged.next();
  }

  clearCart(){
    this.cartService.clearCart();
    this.cartChanged.next();
  }

  ngOnDestroy(){
    this.cartChanged.unsubscribe();
  }

  printItem(){
    console.log(this.cartItems);
  }

}
