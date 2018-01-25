import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MutantesService {
  mutantes:any[] = [];

  //se injeta un instacia Http
  constructor(private _http:Http) {
    console.log("Service ready to use");
    this.cargarMutantes();
  }

  //hace una peticion get
  cargarMutantes(){
    return this._http.get("assets/data/mutantes.json")
              .subscribe( //subscribe para esperar a que responda
                response =>{
                    let data = response.json();
                    this.mutantes = data.mutantes;
                });
  }

}
