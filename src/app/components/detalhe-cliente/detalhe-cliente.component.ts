import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Cliente } from '@models/cliente'

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css']
})
export class DetalheClienteComponent implements OnInit {

  public cliente = {id: 1, nome: 'Daniel', email:'daniel@teste.com'}
  constructor(public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    //chamar o serviço para salvar
    console.log('salvou')
    this.router.navigate(['admin/clientes'])
  }
}
