import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


//Componentes 
import { AppComponent } from './app.component';
import { LoginComponenteComponent } from './components/login-componente/login-componente.component';
import { PrimeraVistaComponent } from './components/primera-vista/primera-vista.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UnidadesComponent } from './components/unidades/unidades.component';
import { NuevaUnidadComponent } from './components/nueva-unidad/nueva-unidad.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponenteComponent,
    PrimeraVistaComponent,
    RegistroUsuarioComponent,
    CrearRegistroComponent,
    UsuarioComponent,
    UnidadesComponent,
    NuevaUnidadComponent,
    RegistrosComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
