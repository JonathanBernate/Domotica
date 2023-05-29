import { RutinaService } from './../../services/rutina.service';
import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
import Dialogtype, { Dialog } from '../../libs/dialog.lib';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-session-detail',
  styleUrls: ['./session-detail.scss'],
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session: any;
  isFavorite = false;
  defaultHref = '';
  rutina:any;
  datos_perfil:any;

  constructor(
    private dataProvider: ConferenceData,
    private userProvider: UserData,
    private route: ActivatedRoute,
    private rutinaService: RutinaService,
    private router:Router,
    private storage:Storage
  ) { }

  ngOnInit() {
    const sessionId = this.route.snapshot.paramMap.get('sessionId');
    this.rutina = JSON.parse(localStorage.getItem('rutina'));
    this.storage.get('datos_perfil')
    .then(data=>{
      this.datos_perfil = data;
      console.log(this.datos_perfil)
    });
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/schedule`;
  }

  sessionClick(item: string) {
    console.log('Clicked', item);
  }

  agendarSesion(){
    this.rutinaService.actualizarRutina(this.rutina.id,true,this.datos_perfil.uid)
    .then(res=>{
      Dialog.show('Se ha agendado la sesión correctamente', Dialogtype.success);
      this.router.navigateByUrl('/app/tabs/speakers');
    })
    .catch(err=>{
      console.log(err);
      Dialog.show('Se ha presentado un error, por favor intente de nuevo', Dialogtype.error);
    })
  }

  toggleFavorite() {
    if (this.userProvider.hasFavorite(this.session.name)) {
      this.userProvider.removeFavorite(this.session.name);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.session.name);
      this.isFavorite = true;
    }
  }

  shareSession() {
    console.log('Clicked share session');
  }
}
