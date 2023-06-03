import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-adicionar-pensamento',
  templateUrl: './adicionar-pensamento.component.html',
  styleUrls: ['./adicionar-pensamento.component.css']
})
export class AdicionarPensamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  adicionarPensamento() {
  }

  cancelar() {
  }

}
