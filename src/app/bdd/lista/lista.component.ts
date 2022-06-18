import { Component, OnInit } from '@angular/core';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  peliculas: any[]=[];

  constructor(private bddService: BaseDeDatosService) { }

  ngOnInit(): void {
    this.getPeliclulas();
  }

  getPeliclulas() {
    this.bddService.getPeliculas().subscribe(data => {
      this.peliculas = [];
      data.forEach((element:any) => {
        this.peliculas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.peliculas);
    });
  }

  eliminarPelicula(id: string) {
    this.bddService.eliminarPelicula(id).then(() => {
      console.log("pelicula eliminada");
    }).catch(error => {
      console.log(error);
    })
  }

}
