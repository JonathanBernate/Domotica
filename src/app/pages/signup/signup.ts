import { AuthService } from './../../services/auth.service';
import { Usuario } from './../../interfaces/usuario';
import { UsuarioService } from './../../services/usuario.service';
import { Component, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Dialogtype, { Dialog } from '../../libs/dialog.lib';
import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { ReactiveFormsModule } from '@angular/forms';

interface UsuarioData {
  uid: string;
  nombre_completo: string;
  tipo_documento: number;
}

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  
  @Input() datos;

  get password(){
		return this.usuarioForm.get('password')
	}

  resultado!: string;
  public errorMessages = {
    password: [
      { type: 'required', message: 'Contraseña requerida' },
      { type: 'minlength', message: 'La contraseña debe tener mínimo 8 caracteres' },
      { type: 'pattern', message: 'La contraseña debe contener al menos 1 Mayúsculas , 1 Minúscula y un valor numérico' }
    ]
  }

  UsuarioList = [];
  usuario: UsuarioData;
  usuarioForm: FormGroup;

  constructor(
    public router: Router,
    public userData: UserData,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private authService:AuthService

  ) {}

  ngOnInit() {

    this.usuarioForm = this.fb.group({
      uid: ['',],
      nombre: ['', [Validators.required]],
      tipo_identificacion: ['', [Validators.required]],
      numero_identificacion: ['', [Validators.required]],
      fecha_nacimiento: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      eps: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      tipo_sangre: ['', [Validators.required]],
      id_rol: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })

  }

  async submit() {
    if (this.usuarioForm.valid){
      let resultado = this.usuarioForm.value;
      const response_auth = this.authService.register(resultado.email, resultado.password)
      .then(res=>{
        console.log(res)
        resultado.uid = res.user.uid;
        resultado.password = atob(resultado.password);
        const response = this.usuarioService.addUser(resultado)
        .then(res2=>{
          this.usuarioForm.reset();
          console.log(res2)
          Dialog.show('Se ha agregado al usuario correctamente', Dialogtype.success);
        });
      })
      .catch(err=>{
        Dialog.show('Se ha presentado un error, por avor intente de nuevo', Dialogtype.error);
      });
    }
  }


}
