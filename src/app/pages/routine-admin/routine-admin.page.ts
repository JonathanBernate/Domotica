import { RutinaService } from './../../services/rutina.service';
import { ActividadService } from './../../services/actividad.service';
import { ModalRoutineActivitiesPage } from './modal-routine-activities/modal-routine-activities.page';
import { ModalAttendanceComponent } from './../attendance/modal-attendance/modal-attendance.component';
import { ModalController, MenuController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { UsuarioService } from './../../services/usuario.service';
import { Component, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Dialogtype, { Dialog } from '../../libs/dialog.lib';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'app-routine-admin',
  templateUrl: './routine-admin.page.html',
  styleUrls: ['./routine-admin.page.scss'],
})
export class RoutineAdminPage  {

  UsuarioList = [];
  rutinaForm: FormGroup;
  entrenadores:any;
  actividades:any;

  constructor(
    public router: Router,
    public userData: UserData,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private rutinaService:RutinaService,
    private modalController: ModalController,
    private actividadService:ActividadService,
    private menuController: MenuController

  ) {}

  ngOnInit() {
    this.rutinaForm = this.fb.group({
      agendado: ['',],
      id_usuario: ['',],
      descripcion: ['',[Validators.required]],
      rutina: ['', [Validators.required]],
      salon: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      entrenador: ['', [Validators.required]],
      actividades: ['', [Validators.required]]
    });

    this.rutinaForm.get('agendado').setValue(false)
    this.usuarioService.consultarEntrenadores().subscribe(data=>{
      this.entrenadores = data;
    });

    this.actividadService.consultarActividades().subscribe(data=>{
      this.actividades = data;
    })

    

  }

  async openCreateActivities() {
    const modal = await this.modalController.create({
      component: ModalRoutineActivitiesPage,
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
    if (this.rutinaForm.valid){
      let rut = this.rutinaForm.value;
        const response = this.rutinaService.agregarRutina(rut)
        .then(res2=>{
          this.rutinaForm.reset();
          Dialog.show('Se ha agregado la rutina correctamente', Dialogtype.success);
        })
      .catch(err=>{
        Dialog.show('Se ha presentado un error, por favor intente de nuevo', Dialogtype.error);
      });
    }
  }

}
