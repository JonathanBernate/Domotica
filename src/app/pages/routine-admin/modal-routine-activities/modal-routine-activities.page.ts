import { ActividadService } from './../../../services/actividad.service';
import { ModalAttendanceComponent } from '../../attendance/modal-attendance/modal-attendance.component';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { UsuarioService } from '../../../services/usuario.service';
import { Component, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Dialogtype, { Dialog } from '../../../libs/dialog.lib';
import { UserData } from '../../../providers/user-data';

@Component({
  selector: 'app-modal-routine-activities',
  templateUrl: './modal-routine-activities.page.html',
  styleUrls: ['./modal-routine-activities.page.scss'],
})
export class ModalRoutineActivitiesPage {

  UsuarioList = [];
  actividadForm: FormGroup;
  entrenadores:any;

  constructor(
    public router: Router,
    public userData: UserData,
    private fb: FormBuilder,
    private actividadService: ActividadService,
    private authService:AuthService,
    private modalController: ModalController

  ) {}

  ngOnInit() {

    this.actividadForm = this.fb.group({
      actividad: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      series: ['', [Validators.required]],
      repeticiones: ['', [Validators.required]],
      imagen: ['',],
      realizado:['',]
    });

    this.actividadForm.get('imagen').setValue("flexiones.gif")
    this.actividadForm.get('realizado').setValue(false)
    this.actividadService.consultarActividades().subscribe(data=>{
      console.log(data);
    })

  }

  async openCreateActividad() {
    const modal = await this.modalController.create({
      component: ModalAttendanceComponent,
      componentProps: {
      }
    });

    modal.onDidDismiss().then((informacion) => {
      if(informacion.data){
        //Dialog.show(informacion.data, Dialogtype.success);
      }
    });

    return await modal.present();
  }

  async submit() {
    if (this.actividadForm.valid){
      let act = this.actividadForm.value;
        const response = this.actividadService.agregarActividad(act)
        .then(res2=>{
          this.actividadForm.reset();
          console.log(res2)
          Dialog.show('Se ha agregado la actividad correctamente', Dialogtype.success);
        })
      .catch(err=>{
        Dialog.show('Se ha presentado un error, por avor intente de nuevo', Dialogtype.error);
      });
    }
  }

}
