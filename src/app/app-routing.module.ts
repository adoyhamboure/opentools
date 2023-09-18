import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/layout.component').then((c) => c.LayoutComponent),
        children: [
          {
            path: '',
            loadChildren: () => import('./toolbox/toolbox.module').then((m) => m.ToolboxModule),
          },
        ]
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }