import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { HeroeComponent } from './heroe/heroe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeroeComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroeDetailComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
