import { Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard/dashboard.component";
import {
  HomeDefaultComponent
} from "./components/dashboard/dashboard/inner-item/home/home-default/home-default.component";
import {
  CustomerDefaultComponent
} from "./components/dashboard/dashboard/inner-item/customer/customer-default/customer-default.component";
import {
  CategoryDefaultComponent
} from "./components/dashboard/dashboard/inner-item/category/category-default/category-default.component";
import {
  DiscountDefaultComponent
} from "./components/dashboard/dashboard/inner-item/discount/discount-default/discount-default.component";
import {
  ProductDefaultComponent
} from "./components/dashboard/dashboard/inner-item/product/product-default/product-default.component";
import {
  CartDefaultComponent
} from "./components/dashboard/dashboard/inner-item/cart/cart-default/cart-default.component";
import {
  ReviewDefaultComponent
} from "./components/dashboard/dashboard/inner-item/review/review-default/review-default.component";

export const routes: Routes = [
  {path:'',redirectTo:'dashboard/home',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent,children:[

      {path:'',redirectTo:'dashboard/home',pathMatch:'full'},
      {path:'home',component:HomeDefaultComponent},
      {path:'customer',component:CustomerDefaultComponent},
      {path:'category',component:CategoryDefaultComponent},
      {path:'discount',component:DiscountDefaultComponent},
      {path:'product',component:ProductDefaultComponent},
      {path:'cart',component:CartDefaultComponent},
      {path:'review',component:ReviewDefaultComponent},
    ]}
];
