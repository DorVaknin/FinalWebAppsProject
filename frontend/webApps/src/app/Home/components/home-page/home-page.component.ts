import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  textualSearch = '';
  currentPage = 1;
  items = [
    {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.sf",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "dsf.productType",
    pictureURL :  "item.pictureURL",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "sdf.productType",
    pictureURL :  "item.sdf",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.sf",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "dsf.productType",
    pictureURL :  "item.pictureURL",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.sf",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "dsf.productType",
    pictureURL :  "item.pictureURL",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.sf",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "dsf.productType",
    pictureURL :  "item.pictureURL",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.sf",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "dsf.productType",
    pictureURL :  "item.pictureURL",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.sf",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "dsf.productType",
    pictureURL :  "item.pictureURL",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.sf",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "dsf.productType",
    pictureURL :  "item.pictureURL",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.sf",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "dsf.productType",
    pictureURL :  "item.pictureURL",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.sf",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "dsf.productType",
    pictureURL :  "item.pictureURL",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.sf",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "dsf.productType",
    pictureURL :  "item.pictureURL",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.sf",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "dsf.productType",
    pictureURL :  "item.pictureURL",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.sf",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "dsf.productType",
    pictureURL :  "item.pictureURL",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.sf",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "dsf.productType",
    pictureURL :  "item.pictureURL",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.sf",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "dsf.productType",
    pictureURL :  "item.pictureURL",
    price :  "item.price",
    animalType :  "item.animalType"
  },
  {
    name:'',
    description:'',
    productType :  "item.productType",
    pictureURL :  "item.sdf",
    price :  "item.price",
    animalType :  "item.animalType"
  },
];
newItems = [];

  constructor() { }

  ngOnInit() {
    console.log(this.items.length);
    this.newItems = this.items.slice(0,12);
  }

  onPageChanged(event){
    console.log(event);
    const currentItems = (event.page - 1)*12;
    console.log(currentItems);
    this.newItems = this.items.slice(currentItems, currentItems + 12);

  }

}
