import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
  { path: 'shop/:id', component: ProductComponent },
  { path: 'shop', component: ShopComponent },
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '' }
];
