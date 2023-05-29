import { Usuario } from './../interfaces/usuario';
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { query, where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private firestore : Firestore
  ) { }

  addUser(usuario:Usuario){
    const usuarioRef = collection(this.firestore,'usuario');
    return addDoc( usuarioRef, usuario);
  }

  consultarUsuarioId(id_usuario:string){
    const ref = collection(this.firestore,'usuario');
    const q = query(ref, where("uid", "==", id_usuario));
    return collectionData(q);
  }

  consultarEntrenadores(){
    const ref = collection(this.firestore,'usuario');
    const q = query(ref, where("id_rol", "==", "2"));
    return collectionData(q);
  }
}
