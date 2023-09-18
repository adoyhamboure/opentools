import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/changelogs/changelogs.component').then((c) => c.ChangelogsComponent),
  },
  {
    path: 'box-shadow',
    loadComponent: () => import('./views/box-shadow-generator/box-shadow-generator.component').then((c) => c.BoxShadowGeneratorComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolboxRoutingModule { }
