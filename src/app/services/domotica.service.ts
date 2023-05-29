import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, updateDoc, collectionChanges, doc } from '@angular/fire/firestore';
import { orderBy, query, where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DomoticaService {

  constructor(
    private firestore: Firestore
  ) { }

  agregarDomotica(domotica: any) {
    const ref = collection(this.firestore, 'domotica');
    return addDoc(ref, domotica);
  }

  consultarDomotica() {
    const ref = collection(this.firestore, 'domotica');
    const q = query(ref);
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

  consultarDomoticaID() {
    const ref = collection(this.firestore, 'domotica');
    const q = query(ref, where("fecha", ">=", "2022-09-22"), orderBy("fecha", "asc"));
    return collectionData(q);
  }

  actualizarDomotica(id_doc, estados) {
    const ref = doc(this.firestore, `domotica/${id_doc}`);
    return updateDoc(ref, { bano_1: estados.bano_1, bano_2: estados.bano_2, cocina_1: estados.cocina_1, cocina_2: estados.cocina_2, cuarto_1: estados.cuarto_1, cuarto_2: estados.cuarto_2, garaje: estados.garaje, dia: estados.dia, luz_garaje: estados.luz_garaje, sala: estados.sala, televisor: estados.televisor })
  }
}
