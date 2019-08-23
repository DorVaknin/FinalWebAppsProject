import { Component, OnInit } from '@angular/core';
import { debounce } from 'lodash';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  onTextChanged = debounce(() => {
    console.log('click');
  }, 500);
  textualSearch = '';
  currentPage = 1;
  items = [
    {
      name: 'ASDF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfsdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'DSAFD',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sfdsF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ds',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdgdfs',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 's',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgfdg',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ASDF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfsdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'DSAFD',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sfdsF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ds',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdgdfs',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 's',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgfdg',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ASDF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfsdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'DSAFD',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sfdsF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ds',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdgdfs',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 's',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgfdg',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ASDF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfsdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'DSAFD',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sfdsF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ds',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdgdfs',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 's',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgfdg',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ASDF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfsdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'DSAFD',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sfdsF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ds',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdgdfs',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 's',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgfdg',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ASDF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfsdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'DSAFD',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sfdsF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ds',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdgdfs',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 's',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgfdg',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ASDF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfsdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'DSAFD',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sfdsF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ds',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdgdfs',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 's',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgfdg',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ASDF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfsdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'DSAFD',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sfdsF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ds',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdgdfs',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 's',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgfdg',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ASDF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfsdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'DSAFD',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sfdsF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ds',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdgdfs',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 's',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgfdg',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ASDF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfsdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'DSAFD',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sfdsF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ds',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdgdfs',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 's',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgfdg',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ASDF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfsdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'DSAFD',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sfdsF',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'ds',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdgdfs',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 's',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.price",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgdf',
      description: '',
      productType: "item.productType",
      pictureURL: "item.sdf",
      price: "item.sf",
      animalType: "item.animalType"
    },
    {
      name: 'sdfgfdg',
      description: '',
      productType: "dsf.productType",
      pictureURL: "item.pictureURL",
      price: "item.price",
      animalType: "item.animalType"
    },
  ];
  newItems = [];

  constructor() { }

  ngOnInit() {
    this.newItems = this.items.slice(0, 12);
  }

  onPageChanged(event) {
    const currentItems = (event.page - 1) * 12;
    this.newItems = this.items.slice(currentItems, currentItems + 12);
  }

}
