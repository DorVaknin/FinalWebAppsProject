import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  columnDefs;
  rowData;
  gridApi: GridApi;
  constructor() { }

  ngOnInit() {
    this.columnDefs = [
      { headerName: 'Make' , field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' }
    ];

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
  }

  onGridReady(event){
    this.gridApi = event.api;
    this.gridApi.sizeColumnsToFit();
  }}