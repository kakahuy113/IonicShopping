import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MilkPage } from './milk.page';

const routes: Routes = [
  {
    path: '',
    component: MilkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MilkPageRoutingModule {}
