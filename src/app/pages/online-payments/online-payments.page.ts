import { Component, OnInit } from '@angular/core';
import { DomoticaService } from '../../services/domotica.service';

@Component({
  selector: 'app-online-payments',
  templateUrl: './online-payments.page.html',
  styleUrls: ['./online-payments.page.scss'],
})
export class OnlinePaymentsPage implements OnInit {
  estados:any;
  constructor(
    private domoticaService: DomoticaService
  ) { }

  ngOnInit() {
    this.getToggle()
  }

  getToggle(){
    this.domoticaService.consultarDomotica().subscribe(data=>{
      console.log(data)
      this.estados=data[0];
    })
  }

}
