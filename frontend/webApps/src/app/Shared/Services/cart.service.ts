import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCart = {};

  constructor() { }

  addItem(itemID: string) {
    this.itemsInCart[itemID] = itemID in this.itemsInCart ? this.itemsInCart[itemID] + 1 : 1;
  }

  deleteItem(itemID: string) {
    if (itemID in this.itemsInCart) {
      this.itemsInCart[itemID] = this.itemsInCart[itemID] - 1;
      if (!this.itemsInCart[itemID]) {
        delete this.itemsInCart[itemID];
      }
    }
  }

  clearCart() {
    this.itemsInCart = {};
  }

  get items(){
    return this.itemsInCart;
  }
}
