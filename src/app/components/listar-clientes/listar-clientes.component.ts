import { Component, OnInit } from '@angular/core';

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
    private service: ClientesService) { }

  ngOnInit() {
    this.getClientes()
  }

  getClientes() {
    this.service.getClientes().then((clientes: Cliente[]) => this.clientes = clientes);
  }

  onSelect(cliente: Cliente): void {
    this.clienteSelecionado = cliente;
  }

  delete(cliente: Cliente) {

  }

}
