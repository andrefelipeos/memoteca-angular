import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

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
  listarSomenteFavoritos: boolean = false;
  favoritos: Array<Pensamento> = []

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pensamentoService
      .listar(this.paginaAtual, this.filtro, this.listarSomenteFavoritos)
      .subscribe(pensamentosDaApi => {
        this.pensamentos = pensamentosDaApi
      });
  }

  carregarMaisPensamentos() {
    this.pensamentoService
      .listar(++this.paginaAtual, this.filtro, this.listarSomenteFavoritos)
      .subscribe(novosPensamentos => {
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
      .listar(this.paginaAtual, this.filtro, this.listarSomenteFavoritos)
      .subscribe(pensamentosFiltrados => {
        this.pensamentos = pensamentosFiltrados
      })
  }

  listarFavoritos() {
    this.paginaAtual = 1
    this.haMaisPensamentos = true
    this.listarSomenteFavoritos = true
    this.pensamentoService
      .listar(this.paginaAtual, this.filtro, this.listarSomenteFavoritos)
      .subscribe(pensamentosFavoritos => {
        this.pensamentos = pensamentosFavoritos
        this.favoritos = pensamentosFavoritos
      })
  }

  recarregarComponente() {
    this.listarSomenteFavoritos = false
    this.paginaAtual = 1
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

}
