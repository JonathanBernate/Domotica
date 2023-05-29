import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRoutineActivitiesPage } from './modal-routine-activities.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRoutineActivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRoutineActivitiesPageRoutingModule {}
