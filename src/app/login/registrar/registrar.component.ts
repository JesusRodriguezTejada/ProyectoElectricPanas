import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  contra1: string="";
  contra2: string="";
  registrarUsuario: FormGroup;
  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router) {
    this.registrarUsuario = fb.group({
      correo: ['', Validators.required],
      numero: ['', Validators.required],
      contrasenia: ['', Validators.required],
      rContrasenia: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registrar() {
    const correo = this.registrarUsuario.value.correo;
    const numero = this.registrarUsuario.value.numero;
    const contrasenia = this.registrarUsuario.value.contrasenia;
    const rContrasenia = this.registrarUsuario.value.rContrasenia;
     this.contra1=this.registrarUsuario.value.contrasenia;
    this.contra2=this.registrarUsuario.value.rContrasenia;
    console.log(this.contra1);
    if (contrasenia == rContrasenia) {

      this.afAuth.createUserWithEmailAndPassword(correo, contrasenia).then((user) => {
        console.log(user);
       // alert("Usuario registrado");
       this.router.navigate(['/login']);
      }).catch((error) => {
        console.log(error);
        alert(this.firebaseError(error.code));
      })
    } else {
      alert(this.firebaseError("no-match-password")); 
      
    }

  }

  firebaseError(code: string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';
      case 'auth/weak-password':
        return 'La contraseña es muy débil';
      case 'auth/invalid-email':
        return 'El correo es inválido';
      case 'no-match-password':
        return 'Las contraseñas no coinciden';
      default:
        return 'Error desconocido';
    }
  }

  salir(): void{
    setTimeout(() => {
      console.log('sleep');
      this.router.navigate(['/home'])
    }, 2000);
  }

}
