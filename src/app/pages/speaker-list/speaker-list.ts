import { Router } from '@angular/router';
import { RutinaService } from './../../services/rutina.service';
import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  rutinas: any[] = [];

  constructor(
    public confData: ConferenceData,
    private rutinaService:RutinaService,
    private router: Router
    ) {}

  ionViewDidEnter() {
    this.rutinaService.consultarRutinas().subscribe(data=>{
      console.log(data);
      this.rutinas=data;
    })
  }

  rutinaSeleccionada(rutina:any){
    localStorage.setItem('rutina',JSON.stringify(rutina))
    this.router.navigateByUrl('/app/tabs/speakers/session/1')
  }
}
