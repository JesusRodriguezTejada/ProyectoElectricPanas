import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  editProducto!: FormGroup;
  submitted!: boolean;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private bddService: BaseDeDatosService,
    private aRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editProducto = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
      img: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.submitted = false;
    this.limpiar();
  }

  ngOnInit(): void {
  }

  editar() {
    this.submitted = true;

    if (this.editProducto.invalid) {
      return;
    }

    const producto: any = {
      nombre : this.editProducto.value.nombre,
      categoria : this.editProducto.value.categoria,
      precio : this.editProducto.value.precio,
      descripcion : this.editProducto.value.descripcion,
      img : this.editProducto.value.img
    }

    if (this.id !== null){
      this.bddService.actualizarProducto(this.id, producto).then(() => {
        Swal.fire("producto editado exitosamente");
        this.router.navigate(['/lista']);
      })
    }
  }

  limpiar() {
    if (this.id !== null) {
      this.bddService.getProducto(this.id).subscribe(data => {

        this.editProducto.setValue({
          nombre: data.payload.data()['nombre'],
          categoria: data.payload.data()['categoria'],
          precio: data.payload.data()['precio'],
          descripcion: data.payload.data()['descripcion'],
          img: data.payload.data()['img']
        })

      })
    }
  }

}
