import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pensamentos = [
    {
      conteudo: 'My name is Rocket',
      autoria: 'Rocket',
      modelo: 'modelo1'
    },
    {
      conteudo: 'No one comes to the Father except through me.',
      autoria: 'Jesus',
      modelo: 'modelo2'
    },
    {
      conteudo: 'I love Angular',
      autoria: 'André',
      modelo: 'modelo3'
    }
  ];

}
