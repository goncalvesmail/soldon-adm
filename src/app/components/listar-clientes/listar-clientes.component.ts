import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import {Cliente} from '@models/cliente'
import {ClientesService} from '@services/clientes.service'

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: Cliente[];
  clienteSelecionado: Cliente;

  constructor(
    private service: ClientesService,
    public router: Router) {
  }

  ngOnInit() {
    this.getClientes()
  }

  getClientes() {
    this.service.getClientes().then((clientes: Cliente[]) => this.clientes = clientes);
  }

  gotoDetail(cliente: Cliente): void {
    this.router.navigate(['/admin/detalhe-cliente', cliente.id]);
  }

  delete(cliente: Cliente) {

  }

}
