import { AsistenciaService } from './../../../services/asistencia.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import jsQR, { QRCode } from 'jsqr';

@Component({
  selector: 'app-modal-attendance',
  templateUrl: './modal-attendance.component.html',
  styleUrls: ['./modal-attendance.component.scss'],
})
export class ModalAttendanceComponent implements OnInit {

  @ViewChild('video', { static: false }) video: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('fileinput', { static: false }) fileinput: ElementRef;

  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;

  videoStart = false;
  medias: MediaStreamConstraints = {
    audio: false,
    video: false,
  };

  constructor(
    private modalController:ModalController,
    private asistenciaService: AsistenciaService
  ) { }

  ngOnInit(){
    this.startVideo();
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;
  }

  async startVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });

    this.videoElement.srcObject = stream;
    this.videoElement.setAttribute('playsinline', true);


    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
  }
  async scan() {
    this.scanActive = true;
    this.videoStart = true;
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if (code) {
        this.scanActive = false;
        let myDate = new Date();
        let asistencia = {
          fecha:myDate.toLocaleDateString(),
          hora_ingreso: myDate.toLocaleTimeString(),
          uid_usuario: code.data,
          id_gimnasio: "626"
        }
        this.crearAsistencia(asistencia);
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  stopVideo(mensaje:string) {
    this.medias.video = false;
    this.videoElement.srcObject.getVideoTracks()[0].enabled = false;
    this.videoElement.srcObject.getVideoTracks()[0].stop();
    this.videoStart = false;
    this.modalController.dismiss(mensaje); 
  }

  async crearAsistencia(info_asistencia:any){
    await this.asistenciaService.crearAsistencia(info_asistencia);
    this.stopVideo("Asistencia Registrada");
  }

}
