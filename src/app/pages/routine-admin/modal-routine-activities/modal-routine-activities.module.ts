import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalRoutineActivitiesPageRoutingModule } from './modal-routine-activities-routing.module';

import { ModalRoutineActivitiesPage } from './modal-routine-activities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModalRoutineActivitiesPageRoutingModule
  ],
  declarations: [ModalRoutineActivitiesPage]
})
export class ModalRoutineActivitiesPageModule {}
