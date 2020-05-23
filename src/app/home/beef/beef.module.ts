import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeefPageRoutingModule } from './beef-routing.module';

import { BeefPage } from './beef.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeefPageRoutingModule
  ],
  declarations: [BeefPage]
})
export class BeefPageModule {}
