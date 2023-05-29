import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlinePaymentsPageRoutingModule } from './online-payments-routing.module';

import { OnlinePaymentsPage } from './online-payments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlinePaymentsPageRoutingModule
  ],
  declarations: [OnlinePaymentsPage]
})
export class OnlinePaymentsPageModule {}
