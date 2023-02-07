import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReUsuario } from '../models/reUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService{
  url_3 = 'http://localhost:4000/api/usuario/';

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<any>{
    return this.http.get(this.url_3);
  }
  eliminarUsuario(id:string): Observable<any>{
    return this.http.delete(this.url_3 + id);
  }
  guardarUsuario(usuario: ReUsuario): Observable<any>{
    return this.http.post(this.url_3, usuario);
  }
  obtenerUsuario(id:String): Observable<any>{
    return this.http.get(this.url_3 + id);
  }
  editarUsuario(id: String, usuario: ReUsuario): Observable<any>{
    return this.http.put(this.url_3 + id, usuario);
  }

}