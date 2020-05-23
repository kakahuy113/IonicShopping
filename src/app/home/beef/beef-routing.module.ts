import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeefPage } from './beef.page';

const routes: Routes = [
  {
    path: '',
    component: BeefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeefPageRoutingModule {}
