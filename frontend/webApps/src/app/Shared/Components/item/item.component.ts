import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemInterface } from '../../types.interface';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements ItemInterface, OnInit {
  @Input() name = '';
  @Input() description = '';
  @Input() productType = '';
  @Input() pictureURL = '';
  @Input() price = null;
  @Input() animalType = '';
  @Input() isInCart = false

  @Output() askIfDeleteItem: EventEmitter<ItemInterface> = new EventEmitter();
  
  amountInCart = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.amountInCart = this.cartService.getAmountOfItem(this.name) || 0;
  }

  addToCart(){
    this.cartService.addItem(this);
    this.amountInCart = this.cartService.getAmountOfItem(this.name);
  }
  
  deduct(){
    if (this.amountInCart === 1){
      this.askIfDeleteItem.emit(this);
    } else {
      this.cartService.deduceOne(this);
      this.amountInCart = this.cartService.getAmountOfItem(this.name);
    }
  }
  
  showCart(){
    console.log(this.cartService.items);
  }

}
