import { Injectable } from '@angular/core';
import { get } from 'lodash';
import { ItemInterface } from '../types.interface';
import { HttpClient } from '@angular/common/http';
import { SERVER, HTTP_STATUS } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addItem(itemId: string) {
    return this.http.post(`${SERVER.URL}/cart/additem/${itemId}`, {}, { observe: 'response' });
  }

  deleteItem(itemID: string) {
    return this.http.delete(`${SERVER.URL}/cart/deleteItem/${itemID}`, { observe: 'response' });
  }

  clearCart() {
    return this.http.delete(`${SERVER.URL}/cart/deleteAllItems`, { observe: 'response' });
  }
  
  removeDuplicates(cart) {
    const nonRepeatedCartItems = [];
    cart.forEach(cartItem => {
      if (nonRepeatedCartItems.findIndex(item => item._id === cartItem._id) < 0) {
        nonRepeatedCartItems.push(cartItem);
      }
    });
    return nonRepeatedCartItems;
  }

  getUserCart() {
    return this.http.get(`${SERVER.URL}/cart/getusercart`);
  }

  // get items(){
  //   return this.itemsInCart;
  // }

  // totalPriceOfCart() {
  //   let totalPrice = 0;
  //   for (let item in this.itemsInCart){
  //     totalPrice += item['price'];
  //   }
  // }
}
