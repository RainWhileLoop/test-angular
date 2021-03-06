import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  {path:'',redirectTo:'top-order',pathMatch:'full'} ,
  {path:'top-order',component:OrderComponent}
];
@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrdersModule { }
