import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './Components/item/item.component';

const components = [
  ItemComponent,
];


@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [components]
})
export class SharedModule { }
