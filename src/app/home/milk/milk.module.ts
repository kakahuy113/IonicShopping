import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilkPageRoutingModule } from './milk-routing.module';

import { MilkPage } from './milk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilkPageRoutingModule
  ],
  declarations: [MilkPage]
})
export class MilkPageModule {}
