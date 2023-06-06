import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarPensamentoComponent } from './componentes/pensamentos/adicionar-pensamento/adicionar-pensamento.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

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
  },
  {
    path: 'mural-de-pensamentos/excluir-pensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'mural-de-pensamentos/editar-pensamento/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
