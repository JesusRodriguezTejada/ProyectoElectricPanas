import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  editPelicula!: FormGroup;
  submitted!: boolean;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private bddService: BaseDeDatosService,
    private aRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editPelicula = this.fb.group({
      titulo: ['', Validators.required],
      direccion: ['', Validators.required],
      anio: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.submitted = false;
    this.limpiar();
  }

  ngOnInit(): void {
  }

  editar() {
    this.submitted = true;

    if (this.editPelicula.invalid) {
      return;
    }

    const pelicula: any = {
      titulo : this.editPelicula.value.titulo,
      direccion : this.editPelicula.value.direccion,
      anio : this.editPelicula.value.anio
    }

    if (this.id !== null){
      this.bddService.actualizarPelicula(this.id, pelicula).then(() => {
        alert("pelicula editada exitosamente");
        this.router.navigate(['/lista']);
      })
    }
  }

  limpiar() {
    if (this.id !== null) {
      this.bddService.getPelicula(this.id).subscribe(data => {

        this.editPelicula.setValue({
          titulo: data.payload.data()['titulo'],
          direccion: data.payload.data()['direccion'],
          anio: data.payload.data()['anio']
        })

      })
    }
  }

}
