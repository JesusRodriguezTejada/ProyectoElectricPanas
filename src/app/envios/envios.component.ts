import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.scss']
})
export class EnviosComponent implements OnInit {
  Titulo= 'electricpanas envios';
  currentdate= new Date();
  costo1= 200;
  costo2= 250;
  costo3= 230;
  costo4= 300;
  constructor() { }

  ngOnInit(): void {
  }

}
