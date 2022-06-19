import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.scss']
})
export class AltasComponent implements OnInit {

  createProducto!: FormGroup;
  submitted!: boolean;

  constructor(
    private fb: FormBuilder, 
    private bddService: BaseDeDatosService,
    private router: Router 
    ) {

    this.createProducto = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
      img: ['undefined', Validators.required]
    })

    this.submitted = false;
  }

  ngOnInit(): void {
  }

  agregarProducto() {
    this.submitted = true;

    if (this.createProducto.invalid) {
      return;
    }

    let producto: any = {
      nombre: this.createProducto.value.nombre,
      categoria: this.createProducto.value.categoria,
      precio: this.createProducto.value.precio,
      descripcion: this.createProducto.value.descripcion,
      img: this.createProducto.value.img
    }

    this.bddService.agregarProducto(producto).then(() => {
      Swal.fire("producto agregado exitosamente");// mensaje de exito
      this.router.navigate(['/lista']);
    }).catch(error => {
      console.log(error);
    })

    console.log(producto);

    this.createProducto.reset
    this.submitted = false;

  }

}
