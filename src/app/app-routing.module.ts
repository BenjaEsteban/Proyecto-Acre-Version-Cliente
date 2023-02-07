import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { LoginComponenteComponent } from './components/login-componente/login-componente.component';
import { NuevaUnidadComponent } from './components/nueva-unidad/nueva-unidad.component';
import { PrimeraVistaComponent } from './components/primera-vista/primera-vista.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { UnidadesComponent } from './components/unidades/unidades.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  { path: '', component: PrimeraVistaComponent,},
  { path: 'login', component: LoginComponenteComponent},
  { path: 'registro', component: RegistroUsuarioComponent},
  { path: 'opcion', component: CrearRegistroComponent},
  { path: 'unidades', component: UnidadesComponent},
  { path: 'usuario', component: UsuarioComponent}, 
  { path: 'crearunidad', component: NuevaUnidadComponent}, 
  { path: 'crearunidad/:id', component: NuevaUnidadComponent}, 
  { path: 'registros', component: RegistrosComponent}, 
  { path: 'crearregistros', component: CrearRegistroComponent}, 
  { path: 'crearregistros/:id', component: CrearRegistroComponent},
  { path: 'crearusuario', component: CrearUsuarioComponent}, 
  { path: 'crearusuario/:id', component: CrearUsuarioComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
