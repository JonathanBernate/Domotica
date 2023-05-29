import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutineAdminPageRoutingModule } from './routine-admin-routing.module';

import { RoutineAdminPage } from './routine-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RoutineAdminPageRoutingModule
  ],
  declarations: [RoutineAdminPage]
})
export class RoutineAdminPageModule {}
