import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from '../models/registroModel';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  url_2 = 'http://localhost:4000/api/registro/';

  constructor(private http: HttpClient) { }

  getRegistro(): Observable<any>{
    return this.http.get(this.url_2);
  }
  eliminarRegistro(id:string): Observable<any>{
    return this.http.delete(this.url_2 + id);
  }
  guardarRegistro(registro: Registro): Observable<any>{
    return this.http.post(this.url_2, registro);
  }
  obtenerRegistro(id:String): Observable<any>{
    return this.http.get(this.url_2 + id);
  }
  editarRegistro(id: String, registro: Registro): Observable<any>{
    return this.http.put(this.url_2 + id, registro);
  }

}
