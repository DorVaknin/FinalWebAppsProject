import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './Components/item/item.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ItemPageComponent } from './Components/item-page/item-page.component';

const components = [
  ItemComponent,
  NavigationComponent,
  ItemPageComponent
];

const modules = [
  CommonModule,
  RouterModule,
  FormsModule
]


@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules]
})
export class SharedModule { }
