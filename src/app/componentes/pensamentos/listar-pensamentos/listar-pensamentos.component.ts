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
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      autoria: 'loremipsum.io',
      modelo: 'modelo3'
    }
  ];

}
