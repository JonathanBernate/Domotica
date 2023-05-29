import { Usuario } from './../interfaces/usuario';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth : Auth
  ) { }

  login(email:string,password:string):Promise<any>{
    return signInWithEmailAndPassword(this.auth,email,password)
  }

  register(email:string,password:string):Promise<any>{
    return createUserWithEmailAndPassword(this.auth,email,password)
  }

  logout():Promise<void>{
    return signOut(this.auth);
  }

  /* resetPassword(email:string):Promise<void>{
    return firebase.auth().sendPasswordResetEmail(email)
  }

  verify():Promise<void>{
    return firebase.auth().currentUser.sendEmailVerification();
  }

  logout():Promise<void>{
    return firebase.auth().signOut();
  } */
}
