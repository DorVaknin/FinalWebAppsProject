import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(){
    this.cartService.addItem(this.name);
  }

  showCart(){
    console.log(this.cartService.items);
  }
}
