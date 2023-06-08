import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const identificador = this.route.snapshot.paramMap.get('id')
    this.pensamentoService
      .buscarPorId(parseInt(identificador!))
      .subscribe(pensamentoParaEditar => {
        this.formulario = this.formBuilder.group({
          id: [pensamentoParaEditar.id],
          conteudo: [pensamentoParaEditar.conteudo],
          autoria: [pensamentoParaEditar.autoria],
          modelo: [pensamentoParaEditar.modelo]
        })
      })
  }

  editarPensamento() {
    this.pensamentoService.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/mural-de-pensamentos'])
    })
  }

}
