import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, updateDoc, collectionChanges, doc } from '@angular/fire/firestore';
import { orderBy, query, where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {

  constructor(
    private firestore : Firestore
  ) { }

  agregarRutina(rutina:any){
    const ref = collection(this.firestore,'rutina');
    return addDoc( ref, rutina);
  }

  consultarRutinas(){
    const ref = collection(this.firestore,'rutina');
    const q = query(ref, where("fecha",">=","2022-09-22"), orderBy("fecha","asc"));
    return collectionChanges(q).pipe(
      map((items) =>
        items.map((item) => {
          const data = item.doc.data();
          const id = item.doc.id;
          return { id, ...data };
        })
      )
    );;
  }

  consultarRutinaID(){
    const ref = collection(this.firestore,'rutina');
    const q = query(ref, where("fecha",">=","2022-09-22"), orderBy("fecha","asc"));
    return collectionData(q);
  }

  actualizarRutina(id_doc, agenda, id_us ){
    const ref = doc(this.firestore,`rutina/${id_doc}`);
    return updateDoc(ref, { agendado:agenda , id_usuario:id_us })
  }
}
