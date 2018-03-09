import { Component, OnInit } from '@angular/core';

import {Cliente} from '@models/cliente'

@Component({
  selector: 'app-listar-clientes',
  //templateUrl: './listar-clientes.component.html',
  template: `
    <h1> Clientes </h1>
  `,
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: Cliente[];
  clienteSelecionado: Cliente;

  constructor() { }

  ngOnInit() {
    console.log('Passou no ngOnInt')
    this.getClientes()
  }

  getClientes() {
    this.clientes = [
      {id: 1, nome: 'Daniel Gonçalves', email:'t@t.com'},
    ]
  }

  onSelect(cliente: Cliente): void {
    this.clienteSelecionado = cliente;
  }

  delete(cliente: Cliente) {

  }

}
