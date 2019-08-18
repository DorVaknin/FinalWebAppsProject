import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './Components/item/item.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { RouterModule } from '@angular/router';

const components = [
  ItemComponent,
  NavigationComponent
];


@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [...components]
})
export class SharedModule { }
