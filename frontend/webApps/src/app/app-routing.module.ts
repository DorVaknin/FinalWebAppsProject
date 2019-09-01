import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Auth/components/login/login.component';
import { SignupComponent } from './Auth/components/signup/signup.component';
import { HomePageComponent } from './Home/components/home-page/home-page.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'cart', loadChildren: () => import('./Cart/cart.module').then(m => m.CartModule)},
  {path: 'admin', loadChildren: () => import('./Admin-screen/admin-module.module').then(m => m.AdminModuleModule)},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
