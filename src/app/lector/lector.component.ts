import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lector',
  templateUrl: './lector.component.html',
  styleUrls: ['./lector.component.scss']
})
export class LectorComponent implements OnInit {
  
  constructor() { 


  }

  ngOnInit(): void {
  }


text:string='';
  speech = new SpeechSynthesisUtterance();


  hablar(texto:HTMLDivElement){  
    this.text=texto.innerHTML;
    console.log(this.text); 
    this.speech.text=this.text;
    this.speech.volume = 1;
    this.speech.rate = 1;
    this.speech.pitch = 1;

  speechSynthesis.speak(this.speech);
  }

  pause(){
    speechSynthesis.pause();
    console.log("f");
  }
  resumen(){
    speechSynthesis.resume();
    console.log("f1");
  }

  cancelar(){
    speechSynthesis.cancel();
    console.log("f3");
  }
}
