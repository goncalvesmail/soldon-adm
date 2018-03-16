import { Injectable } from '@angular/core';
import { Cliente } from '@models/cliente';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http'

import 'rxjs/add/operator/toPromise';
import { environment } from 'environments/environment';

@Injectable()
export class ClientesService {
  private servicoURL = environment.servicoURL;
  private headers = new Headers({'Content-Type': 'application/json'});
  private clienteURL: string

  constructor(
    private httpClient: HttpClient) {
    console.log('construindo servico')
    this.clienteURL = this.servicoURL+'/clientes'
  }

  public getClientes(): Promise<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.clienteURL}`).toPromise().catch(this.handleError)
  }

  getCliente(id: number): Promise<Cliente> {
    const url = `${this.clienteURL}/${id}`;
    return this.httpClient.get<Cliente>(url).toPromise().catch(this.handleError)
  }

  update(cliente: Cliente): Promise<Cliente> {
    const url = `${this.clienteURL}/${cliente.id}`;
    return this.httpClient.put<Cliente>(url, cliente).toPromise().catch(this.handleError)
  }

  create(name: string): Promise<Cliente> {
    return this.httpClient.post<Cliente>(this.clienteURL,{name: name}).toPromise().catch(this.handleError)
  }

  delete(id: number): Promise<void> {
    const url = `${this.clienteURL}/${id}`;
    return this.httpClient.delete(url).toPromise().catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('Erro no servico de Clientes ->', error);
    return Promise.reject(error.message || error);
  }
}
