import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { query, where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(
    private firestore : Firestore
  ) { }

  agregarActividad(actividad:any){
    const ref = collection(this.firestore,'actividad');
    return addDoc( ref, actividad);
  }

  consultarActividades(){
    const ref = collection(this.firestore,'actividad');
    return collectionData(ref);
  }
}
