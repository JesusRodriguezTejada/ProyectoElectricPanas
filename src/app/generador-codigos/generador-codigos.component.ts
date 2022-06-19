import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generador-codigos',
  templateUrl: './generador-codigos.component.html',
  styleUrls: ['./generador-codigos.component.scss']
})
export class GeneradorCodigosComponent implements OnInit {
  myAngularxQrCode:any;
  constructor() { }

  ngOnInit(): void {

  }
  boton() {
    
    var rand = ~~(Math.random()*direcciones.length);
    var rValue = direcciones[rand];
    this.myAngularxQrCode = rValue.url;
   
    
  }


}
interface Direccion{
  nombre: string;
  url: string;
};
const direcciones: Direccion[] = [{
  nombre: "esiima",
  url: "https://esiima.uaa.mx/"
},
{
  nombre: "youtube",
  url: "https://youtube.com/"
},
{
  nombre: "google",
  url: "https://www.google.com.mx/"
},
{
nombre: "facebook",
url: "https://www.facebook.com/"
},
{
  nombre: "instagram",
  url: "https://www.instagram.com/"
},
{
  nombre: "Stackblitz",
  url: "https://stackblitz.com/"
},

{
  nombre: "GitHub",
  url: "https://github.com/"
},
];




