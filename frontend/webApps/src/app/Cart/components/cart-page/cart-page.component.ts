import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../../Shared/Services/cart.service';
import { Subject } from 'rxjs';
import { ItemInterface } from 'src/app/Shared/types.interface';

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

  deduceOne(item: ItemInterface){
    this.cartService.deduceOne(item);
    this.cartChanged.next();
  }

  addOne(item: ItemInterface){
    this.cartService.addItem(item);
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
