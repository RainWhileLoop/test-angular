import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
const routes:Routes = [
  {path:'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
