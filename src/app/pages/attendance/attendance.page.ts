import { AsistenciaService } from './../../services/asistencia.service';
import { ModalController } from '@ionic/angular';
import { ModalAttendanceComponent } from './modal-attendance/modal-attendance.component';
import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import jsQR, { QRCode } from 'jsqr';
import Dialogtype, { Dialog } from '../../libs/dialog.lib';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage  {

  asistencias=[];
  constructor(
    private modalController:ModalController,
    private asistenciaService: AsistenciaService
  ) { }

  ngOnInit() {
    this.consultarAsistencia();
  }

  consultarAsistencia(){
    this.asistenciaService.consultarAsistencia().subscribe(data=>{
      this.asistencias=data
    });
  }

  async openScanner() {
    const modal = await this.modalController.create({
      component: ModalAttendanceComponent,
      componentProps: {
      }
    });

    modal.onDidDismiss().then((informacion) => {
      if(informacion.data){
        Dialog.show(informacion.data, Dialogtype.success);
      }
    });

    return await modal.present();
  }
}
