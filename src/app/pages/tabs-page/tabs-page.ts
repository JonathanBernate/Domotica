import { MenuController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {

  constructor(
    private menuCtrl:MenuController
  ){

  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }
}
