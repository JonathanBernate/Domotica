import { Component, ElementRef, Inject, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Platform } from '@ionic/angular';
import { DOCUMENT} from '@angular/common';

import { darkStyle } from './map-dark-style';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage implements OnInit {
  latitude: number;
  longitude: number;
  places: any[];

  constructor(
    public platform: Platform) {
      this.longitude = -74.0600002;
    this.latitude = 4.666666;
    this.places = [];
    }

    ngOnInit() {

      this.places = [
        {
          latitude:4.6663418,
          longitude:-74.057024
        },
        {
          latitude:4.6663426,
          longitude:-74.058042
        }
      ]
      
    }
1
}


