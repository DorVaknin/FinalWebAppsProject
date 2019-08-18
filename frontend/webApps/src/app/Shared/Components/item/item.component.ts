import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() name = '';
  @Input() description = '';
  @Input() productType = '';
  @Input() pictureURL = '';
  @Input() price = '';
  @Input() animalType = '';

  constructor() { }

  ngOnInit() {
  }

}
