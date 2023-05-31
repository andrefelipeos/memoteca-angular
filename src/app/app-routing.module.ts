import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarPensamentoComponent } from './componentes/pensamentos/adicionar-pensamento/adicionar-pensamento.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mural-de-pensamentos',
    pathMatch: 'full'
  },
  {
    path: 'adicionar-pensamento',
    component: AdicionarPensamentoComponent
  },
  {
    path: 'mural-de-pensamentos',
    component: ListarPensamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
