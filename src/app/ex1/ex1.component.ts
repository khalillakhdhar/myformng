import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrl: './ex1.component.css'
})
export class Ex1Component {
  titre: string = '';
  prix!: number
  description: string = '';
  quantite: number = 0;
  categorie: string = '';
  constructor() {}
  

}
