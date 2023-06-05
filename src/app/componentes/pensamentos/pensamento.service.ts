import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Array<Pensamento>> {
    return this.httpClient.get<Array<Pensamento>>(this.API)
  }

}
