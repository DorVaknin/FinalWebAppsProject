import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import {get} from 'lodash';

import {BackendCommunicatorService} from "../../../Shared/Services/backend-communicator.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  columnDefs;
  rowData;
  gridApi: GridApi;

  constructor(private backendCommunicatorService: BackendCommunicatorService) { }

  ngOnInit() {
    this.backendCommunicatorService.getAllUsers().subscribe(data => this.rowData = data);
    this.columnDefs = [
      {
        headerName: 'User Name' ,
        field: 'ID'
      },
      {
        headerName: 'Name',
        field: 'Name'
      },
      {
        headerName: 'Email',
        field: 'Email'
      },
      {
        headerName: '# items in cart',
        valueGetter : (params) => get(params, 'data.Cart.length')
      },
      {
        headerName: '# items bought',
        valueGetter : (params) => get(params, 'data.Purchases.length')
      }
    ];
  }

  onGridReady(event){
    this.gridApi = event.api;
    this.gridApi.sizeColumnsToFit();
  }}
