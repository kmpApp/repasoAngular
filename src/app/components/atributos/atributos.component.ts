import { Component} from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent  {

  constructor() { }

  url_img:string = "assets/img/candidate.png";
  alt_img:string = "";


}
