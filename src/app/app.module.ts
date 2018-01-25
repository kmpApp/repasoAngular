import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VariablesComponent } from './components/variables/variables.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AtributosComponent } from './components/atributos/atributos.component';
import { EstructuralesComponent } from './components/estructurales/estructurales.component';
import { HttpComponent } from './components/http/http.component';

//services
//servicios van en providers
import { MutantesService } from './sevices/mutantes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VariablesComponent,
    FormularioComponent,
    AtributosComponent,
    EstructuralesComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MutantesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
