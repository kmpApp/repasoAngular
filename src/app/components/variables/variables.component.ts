import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent  {

  constructor() {}
  nombre:string = "pepe pecas";
  edad:number = 27;



  //declaracion de una función
  cuadradoEdad(){
    this.edad = this.edad + 1;
  }

}
