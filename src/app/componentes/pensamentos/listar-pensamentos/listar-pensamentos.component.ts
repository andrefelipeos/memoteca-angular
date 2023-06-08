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

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual).subscribe(pensamentosDaApi => {
      this.pensamentos = pensamentosDaApi
    });
  }

  carregarMaisPensamentos() {
    this.pensamentoService.listar(++this.paginaAtual).subscribe(listaPensamentos => {
      this.pensamentos.push(...listaPensamentos)
      if (!listaPensamentos.length) {
        this.haMaisPensamentos = false
      }
    })
  }

}
