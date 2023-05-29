import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlinePaymentsPage } from './online-payments.page';

const routes: Routes = [
  {
    path: '',
    component: OnlinePaymentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlinePaymentsPageRoutingModule {}
