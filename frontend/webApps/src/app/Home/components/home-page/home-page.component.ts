import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  textualSearch = '';
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

  constructor() { }

  ngOnInit() {
  }

}
