import { Component, OnInit } from '@angular/core';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { admins } from 'src/app/admins';

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
  loading: boolean;
  dataUser: any;
  userName: string;
  admin: boolean;
  admins: string[]=[];

  constructor(
    private afAuth: AngularFireAuth,
    private bddService: BaseDeDatosService,
    private router: Router
    ) { 
    this.loading = true;
    this.admin = false;
    this.userName = '';
    this.admins = admins; 
  }

  ngOnInit(): void {
    this.afAuth.currentUser.then( user => {
      if(!user) {
        this.router.navigate(['/login']);
      }else{
        this.getProductos();
        this.dataUser = user;
        this.userName = this.dataUser.email;
        this.checkAdmin();
        console.log(this.admins);
      }
    })

    
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
      this.loading = false;
    });
  }

  eliminarProducto(id: string) {
    this.bddService.eliminarProducto(id).then(() => {
      Swal.fire("producto eliminado");
    }).catch(error => {
      console.log(error);
    })
  }

  consulta(condicion:string){
    this.condicion = condicion;
  }

  checkAdmin() {
    admins.forEach((i:any) => {
      if(i==this.userName){
        this.admin = true;
      }
    })
  }

}
