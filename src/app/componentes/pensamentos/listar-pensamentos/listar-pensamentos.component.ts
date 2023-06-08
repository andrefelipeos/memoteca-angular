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

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual).subscribe(pensamentosDaApi => {
      this.pensamentos = pensamentosDaApi
    });
  }

}
