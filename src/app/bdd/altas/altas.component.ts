import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.scss']
})
export class AltasComponent implements OnInit {

  createPelicula!: FormGroup;
  submitted!: boolean;

  constructor(private fb: FormBuilder, private bddService: BaseDeDatosService) {

    this.createPelicula = this.fb.group({
      titulo: ['', Validators.required],
      direccion: ['', Validators.required],
      anio: ['', Validators.required]
    })

    this.submitted = false;
  }

  ngOnInit(): void {
  }

  agregarPelicula() {
    this.submitted = true;

    if (this.createPelicula.invalid) {
      return;
    }

    let pelicula: any = {
      titulo: this.createPelicula.value.titulo,
      direccion: this.createPelicula.value.direccion,
      anio: this.createPelicula.value.anio
    }

    this.bddService.agregarPelicula(pelicula).then(() => {
      alert("pelicula agregada exitosamente");
    }).catch(error => {
      console.log(error);
    })

    console.log(pelicula);

    this.createPelicula.reset
    this.submitted = false;

  }

}
