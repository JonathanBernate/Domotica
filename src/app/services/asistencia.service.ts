import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, getDoc } from '@angular/fire/firestore';
import { query, where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(
    private firestore : Firestore
  ) { }

  crearAsistencia(asistencia:any){
    const ref = collection(this.firestore,'asistencia');
    return addDoc( ref, asistencia);
  }

  consultarAsistencia(){
    const ref = collection(this.firestore,'asistencia');
    const q = query(ref);
    return collectionData(q);
  }
}
