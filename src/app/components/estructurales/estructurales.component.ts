import { Component } from '@angular/core';

@Component({
  selector: 'app-estructurales',
  templateUrl: './estructurales.component.html',
  styleUrls: ['./estructurales.component.css']
})
export class EstructuralesComponent  {

  constructor() { }

  existo:Boolean = true;

  eats:string[] = ["apple","banana","pineapple", "kiwi"];



}
