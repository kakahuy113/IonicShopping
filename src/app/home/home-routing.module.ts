import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'beef',
        loadChildren: () => import('./beef/beef.module').then( m => m.BeefPageModule)
      },
      {
        path: 'milk',
        loadChildren: () => import('./milk/milk.module').then( m => m.MilkPageModule)
      },
      {
        path: 'gift',
        loadChildren: () => import('./gift/gift.module').then( m => m.GiftPageModule)
      },
      {
        path: '',
        redirectTo: 'beef',
        pathMatch: 'full'
      },
    ]
  },
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
