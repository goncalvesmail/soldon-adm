import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminContentComponent } from '../admin-content/admin-content.component';
import { ListarClientesComponent } from '@components/listar-clientes/listar-clientes.component';
import { DetalheClienteComponent } from '@components/detalhe-cliente/detalhe-cliente.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard1',
            pathMatch: 'full'
          },
          {
            path: 'dashboard1',
            component: AdminDashboard1Component
          },
          {
            path: 'dashboard2',
            component: AdminDashboard2Component
          }, {
            path: 'content',
            component: AdminContentComponent
          },
          { path: 'clientes',
            component: ListarClientesComponent }
          ,
          { path: 'detalhe-cliente/:id',
            component: DetalheClienteComponent }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
