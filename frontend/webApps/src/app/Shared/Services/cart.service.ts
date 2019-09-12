import { Injectable } from '@angular/core';
import { get } from 'lodash';
import { ItemInterface } from '../types.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCart = {};

  constructor() { }

  addItem(item: ItemInterface) {
    if (!(item.name in this.itemsInCart)) {
      this.itemsInCart[item.name] = item;
    }
      this.itemsInCart[item.name].amountInCart = this.itemsInCart[item.name].amountInCart + 1;
  }

  deduceOne(item: ItemInterface) {
    if (item.name in this.itemsInCart) {
      this.itemsInCart[item.name].amountInCart = this.itemsInCart[item.name].amountInCart - 1;
      if (!this.itemsInCart[item.name].amountInCart) {
        this.deleteItem(item.name);
      }
    }
  }

  deleteItem(itemID: string){
    if (itemID in this.itemsInCart) {
      delete this.itemsInCart[itemID];
    }
  }

  clearCart() {
    this.itemsInCart = {};
  }

  getAmountOfItem(itemID: string){
    return get(this.itemsInCart, `[${itemID}].amountInCart`) || 0;
  }

  get items(){
    return this.itemsInCart;
  }

  totalPriceOfCart() {
    let totalPrice = 0;
    for (let item in this.itemsInCart){
      totalPrice += item['price'];
    }
  }
}
