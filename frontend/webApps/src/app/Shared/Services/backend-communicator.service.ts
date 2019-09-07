import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER } from '../enums';
import { ItemInterface } from '../types.interface';

@Injectable({
  providedIn: 'root'
})
export class BackendCommunicatorService {

  constructor(private http: HttpClient,
  ) { }

  async getItemsBySearch(searchText){
    return (await this.http.get(`${SERVER.URL}/store/search/${searchText}`).toPromise());
  }
}
