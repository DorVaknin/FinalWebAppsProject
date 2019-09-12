import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from './Components/item/item.component';
import {NavigationComponent} from './Components/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ShortenTextPipe} from "./Pipes/shorten-text.pipe";

const components = [
  ItemComponent,
  NavigationComponent,
];

const pipes = [
  ShortenTextPipe
];
const modules = [
  CommonModule,
  RouterModule,
  FormsModule,
  HttpClientModule,
];


@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components, ...modules, ...pipes]
})
export class SharedModule {
}
