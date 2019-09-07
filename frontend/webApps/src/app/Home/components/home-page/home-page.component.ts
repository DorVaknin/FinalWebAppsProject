import { Component, OnInit } from '@angular/core';
import { debounce } from 'lodash';
import { BackendCommunicatorService } from '../../../Shared/Services/backend-communicator.service';
import { ItemInterface } from 'src/app/Shared/types.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  textualSearch = '';
  currentPage = 1;
  items : ItemInterface[];
  displayLodaer = false;
  onTextChangedDebounced = debounce(this.onTextChanged, 500);
  newItems = [];

  constructor(private backendCommunicatorService: BackendCommunicatorService) {}

  ngOnInit() {
    this.onTextChanged();
  }

  onPageChanged(event) {
    // const currentItems = (event.page - 1) * 12;
    // this.newItems = this.items.slice(currentItems, currentItems + 12);
  }

  async onTextChanged() {
    this.displayLodaer = true;
    this.items = <ItemInterface[]>await this.backendCommunicatorService.getItemsBySearch(this.textualSearch);
    this.displayLodaer = false;
    console.log(this.items);
    
  }

}
