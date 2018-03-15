import { Injectable } from '@angular/core';
import { Cliente } from '@models/cliente';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http'

import 'rxjs/add/operator/toPromise';
import { environment } from 'environments/environment';

@Injectable()
export class ClientesService {
  private servicoURL = environment.servicoURL;  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private httpClient: HttpClient) { }

  public getClientes(): Promise<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.servicoURL}/clientes`).toPromise().catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
