import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements OnInit {

  @ViewChild('inputFile', { static: false }) inputFile!: ElementRef<HTMLElement>;
  dataImage!: any;
  imgSelected: string = 'assets/images/perfil.png';
  datos_perfil:any=[];


  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    private storage:Storage
  ) { }

  ngOnInit(){
    this.storage.get('datos_perfil')
    .then(data=>{
      this.datos_perfil = data;
      console.log(this.datos_perfil)
    });
  }

  print(){
    window.print();
  }

/*   async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.userData.setUsername(data.username);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  } */

  changePassword() {
    console.log('Clicked to change password');
  }

  support() {
    this.router.navigateByUrl('/support');
  }


}
