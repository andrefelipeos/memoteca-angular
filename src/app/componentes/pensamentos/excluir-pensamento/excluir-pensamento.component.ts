import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  identificador: number = 0;

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.identificador = parseInt(this.route.snapshot.paramMap.get('id')!)
  }

  excluirPensamento() {
    this.pensamentoService.excluir(this.identificador).subscribe(() => {
      this.router.navigate(['/mural-de-pensamentos'])
    })
  }

}
