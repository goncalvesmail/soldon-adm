import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Cliente } from '@models/cliente'
import { ClientesService } from '@services/clientes.service';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css']
})
export class DetalheClienteComponent implements OnInit {

  public cliente: Cliente

  constructor(
    public actRouter: ActivatedRoute,
    public router: Router,
    public clienteService: ClientesService) {

      this.cliente = {id:0,nome:'',email:''}
    }

  ngOnInit() {
    this.actRouter.paramMap
      .switchMap((params: ParamMap) => this.clienteService.getCliente(+params.get('id')))
      .subscribe(cliente => this.cliente = cliente);
  }

  onSubmit() {
    //chamar o serviço para salvar
    console.log('salvou')
    this.router.navigate(['admin/clientes'])
  }
}
