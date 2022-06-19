import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUsuario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router
    ) { 
      this.loginUsuario = this.fb.group({
        correo: ['', Validators.required],
        contrasenia: ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

  login() {
    const correo = this.loginUsuario.value.correo;
    const contrasenia = this.loginUsuario.value.contrasenia;

    this.afAuth.signInWithEmailAndPassword(correo, contrasenia).then((user) => {
      console.log(user);
      this.router.navigate(['/home']);
    }).catch((error) => {
      console.log(error);
      Swal.fire(this.firebaseError(error.code));//// MENSAJE DE ERROR
    })
  }

  firebaseError(code: string) {
    switch (code) {
      case 'auth/user-not-found':
        return 'El usuario no ha sido encontrado';
      default:
        return 'Correo o contraseña incorrectos';
    }
  }

}
