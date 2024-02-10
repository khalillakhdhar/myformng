import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  nom:string=""
  prenom:string=""
  taille!:number;
  poids!:number;
  age?:number;
  imc?:number;
  message?:string;

}
