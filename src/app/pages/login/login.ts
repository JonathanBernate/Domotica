import { UsuarioService } from './../../services/usuario.service';
import { AuthService } from './../../services/auth.service';
import { MenuController } from '@ionic/angular';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Dialogtype, { Dialog } from '../../libs/dialog.lib';
import { UserData } from '../../providers/user-data';
import { Storage } from '@ionic/storage';
import { UserOptions } from '../../interfaces/user-options';
import { DomoticaService } from '../../services/domotica.service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {


  estados: any;

  constructor(
    public domoticaService: DomoticaService
  ) { }

  ngOnInit() {
    this.getToggle();
  }

  getToggle() {
    this.domoticaService.consultarDomotica().subscribe(data => {
      console.log(data)
      this.estados = data[0];
    })
  }

  changeStatus() {
    this.domoticaService.actualizarDomotica(this.estados.id, this.estados).then(data => {
      this.getToggle();
    })

  }

}
