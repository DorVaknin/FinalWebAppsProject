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
  
  @ViewChild('modalTemplateRef', {static: true} ) modalTemplateRef :NgbModalRef;

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
    this.cartService.clearCart();
    this.cartChanged.next();
  }

  ngOnDestroy(){
    this.cartChanged.unsubscribe();
  }

  openModal(item){
    this.askIfDeleteItemName = item.name;
    this.modalService.open(this.modalTemplateRef, {
      size: 'sm',
      centered: true
    }).result.then(() => this.removeItem(item.name), () => {});
  }
}
