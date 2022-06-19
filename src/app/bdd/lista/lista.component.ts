import { Component, OnInit } from '@angular/core';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  productos: any[]=[];
  condicion = "";
  src = "../../../assets/img/productos/";
  src2=".jpg";

  constructor(private bddService: BaseDeDatosService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.bddService.getProductos().subscribe(data => {
      this.productos = [];
      data.forEach((element:any) => {
        this.productos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.productos);
    });
  }

  eliminarProducto(id: string) {
    this.bddService.eliminarProducto(id).then(() => {
      console.log("producto eliminado");
    }).catch(error => {
      console.log(error);
    })
  }

  consulta(condicion:string){
    this.condicion = condicion;
  }

}
