import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private httpClient: HttpClient) { }

  listar(pagina: number): Observable<Array<Pensamento>> {
    const itensPorPagina = 12
    let parametros = new HttpParams().set('_page', pagina).set('_limit', itensPorPagina)
    return this.httpClient.get<Array<Pensamento>>(this.API, { params: parametros })
  }

  cadastrar(pensamento: Pensamento): Observable<Pensamento> {
    return this.httpClient.post<Pensamento>(this.API, pensamento)
  }

  excluir(identificador: number): Observable<Pensamento> {
    const url = `${this.API}/${identificador}`
    return this.httpClient.delete<Pensamento>(url)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.httpClient.put<Pensamento>(url, pensamento);
  }

  buscarPorId(identificador: number): Observable<Pensamento> {
    const url = `${this.API}/${identificador}`
    return this.httpClient.get<Pensamento>(url)
  }

}
