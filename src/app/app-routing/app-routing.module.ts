import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListarClientesComponent } from '@components/listar-clientes/listar-clientes.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'admin/dashboard1', pathMatch: 'full' }
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
