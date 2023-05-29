import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutineAdminPage } from './routine-admin.page';

const routes: Routes = [
  {
    path: '',
    component: RoutineAdminPage
  },
  {
    path: 'modal-routine-activities',
    loadChildren: () => import('./modal-routine-activities/modal-routine-activities.module').then( m => m.ModalRoutineActivitiesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutineAdminPageRoutingModule {}
