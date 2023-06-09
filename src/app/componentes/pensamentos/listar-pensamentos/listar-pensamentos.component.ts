import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  paginaAtual: number = 1
  pensamentos: Array<Pensamento> = [];
  haMaisPensamentos: boolean = true
  filtro: string = '';

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual, this.filtro).subscribe(pensamentosDaApi => {
      this.pensamentos = pensamentosDaApi
    });
  }

  carregarMaisPensamentos() {
    this.pensamentoService.listar(++this.paginaAtual, this.filtro).subscribe(novosPensamentos => {
      this.pensamentos.push(...novosPensamentos)
      if (!novosPensamentos.length) {
        this.haMaisPensamentos = false
      }
    })
  }

  pesquisarPensamentos() {
    this.paginaAtual = 1
    this.haMaisPensamentos = true
    this.pensamentoService
      .listar(this.paginaAtual, this.filtro)
      .subscribe(pensamentosFiltrados => {
        this.pensamentos = pensamentosFiltrados
      })
  }

}
