import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

import { CartService } from '../../../Shared/Services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit, OnDestroy {
  cartItems = {};
  cartChanged = new Subject();
  askIfDeleteItemName = '';

  @ViewChild('askIfDeleteItemTemplate', {static: true} ) askIfDeleteItemTemplate :NgbModalRef;
  @ViewChild('deleteCartTemplate', {static: true} ) deleteCartTemplate :NgbModalRef;

  constructor(private cartService: CartService, private modalService: NgbModal) { }

  ngOnInit() {
    this.cartItems = this.cartService.items;
    this.cartChanged.subscribe(() => this.cartItems = this.cartService.items);
  }

  removeItem(itemId){
    this.cartService.deleteItem(itemId);
    this.cartChanged.next();
  }

  clearCart(){
    this.openModal(this.deleteCartTemplate).then(() => {
      this.cartService.clearCart();
      this.cartChanged.next();
    });
  }


  openModal(modalTemplateRef :NgbModalRef){
    return this.modalService.open(modalTemplateRef, {
      size: 'sm',
      centered: true
    }).result;
  }

  get cartHasItems(){
    return Object.keys(this.cartItems).length;
  }

  ngOnDestroy(){
    this.cartChanged.unsubscribe();
  }

  askIfSeleteItem(item){
    this.askIfDeleteItemName = item.name;
    this.openModal(this.askIfDeleteItemTemplate).then(() => this.removeItem(item.name), () => {});
  }
}
