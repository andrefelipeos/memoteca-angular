import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-pensamento',
  templateUrl: './adicionar-pensamento.component.html',
  styleUrls: ['./adicionar-pensamento.component.css']
})
export class AdicionarPensamentoComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(20)
        ])
      ],
      autoria: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2)
        ])
      ],
      modelo: ['modelo1'],
      favorito: [false]
    })
  }

  adicionarPensamento() {
    if (this.formulario.valid) {
      this.pensamentoService.cadastrar(this.formulario.value).subscribe(() => {
        this.router.navigate(['mural-de-pensamentos']);
      });
    }
  }

}
