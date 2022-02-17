import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import {HomeComponent} from '../app/home/home.component';
import {BlogComponent} from '../app/blog/blog.component';
import {MerchantComponent} from '../app/merchant/merchant.component'
import {RiderComponent} from '../app/rider/rider.component';
import {AboutComponent} from '../app/about/about.component';
import {TestComponent} from '../app/test/test.component';
import {ItemsComponent} from '../app/items/items.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent, children: [
    {path:'items', component: ItemsComponent}
  ]  },
  { path: 'rider', component: RiderComponent },
  { path: 'merchant', component: MerchantComponent },
  { path: 'about', component: AboutComponent },
  { path: 'test', component: TestComponent },
  { path:'items', component: ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
