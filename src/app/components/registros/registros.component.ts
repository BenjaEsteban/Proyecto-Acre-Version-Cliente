import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/registroModel';
import { RegistroService } from 'src/app/services/registro.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css'],

})
export class RegistrosComponent implements OnInit {

    listRegistros: Registro[] = [];
  
    constructor(private _registroService: RegistroService,
                private toastr: ToastrService) { }
  
    ngOnInit(): void {
      this.obtenerRegistro();
    }
  
    obtenerRegistro() {
      this._registroService.getRegistro().subscribe(data => {
        console.log(data);
        this.listRegistros = data;
      }, error => {
        console.log(error);
      })
    }  
    eliminarRegistro(id: any){
      this._registroService.eliminarRegistro(id).subscribe(data =>{
        this.toastr.error('El Registro se eliminó con exito', 'Registro Eliminado');
        this.obtenerRegistro();
      }, error => {
        console.log(error);
      })
      
    }
  }