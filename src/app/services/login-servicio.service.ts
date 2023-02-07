import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginServicioService {
  url = 'http://localhost:4000/api/unidad/';

  constructor(private http: HttpClient) { }

  getUnidad(): Observable<any>{
    return this.http.get(this.url);
  }
  eliminarUnidad(id:string): Observable<any>{
    return this.http.delete(this.url + id);
  }
  guardarUnidad(unidad: Usuario): Observable<any>{
    return this.http.post(this.url, unidad);
  }
  obtenerUnidad(id:String): Observable<any>{
    return this.http.get(this.url + id);
  }
  editarUnidad(id: String, unidad: Usuario): Observable<any>{
    return this.http.put(this.url + id, unidad);
  }

}
