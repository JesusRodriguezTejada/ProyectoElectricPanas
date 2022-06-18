import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseDeDatosService {

  constructor(private firestore: AngularFirestore) { }

  agregarPelicula(pelicula: any): Promise<any>{
    return this.firestore.collection("peliculas").add(pelicula);
  }

  getPeliculas(): Observable<any> {
    return this.firestore.collection('peliculas').snapshotChanges();
  }

  getPelicula(id: string): Observable<any>{
    return this.firestore.collection('peliculas').doc(id).snapshotChanges();
  }

  eliminarPelicula(id: string): Promise<any> {
    return this.firestore.collection("peliculas").doc(id).delete();
  }

  actualizarPelicula(id: string, data: any): Promise<any>{
    return this.firestore.collection("peliculas").doc(id).update(data);
  }

}
