import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-pensamento',
  templateUrl: './adicionar-pensamento.component.html',
  styleUrls: ['./adicionar-pensamento.component.css']
})
export class AdicionarPensamentoComponent implements OnInit {

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  adicionarPensamento() {
    this.pensamentoService.cadastrar(this.pensamento).subscribe(() => {
      this.router.navigate(['mural-de-pensamentos']);
    });
  }

  cancelar() {
  }

}
