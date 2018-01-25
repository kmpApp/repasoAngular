import { Component } from '@angular/core';

//Services import
import { MutantesService } from '../../sevices/mutantes.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {

  //Constructor
  //Se injecta el servicio
  constructor(private _ms: MutantesService ) {
  }




}
