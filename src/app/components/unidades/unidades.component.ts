import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { LoginServicioService } from 'src/app/services/login-servicio.service';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {

  listUnidades: Usuario[] = [];

  constructor(private _usuarioService: LoginServicioService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerUnidad();
  }

  obtenerUnidad() {
    this._usuarioService.getUnidad().subscribe(data => {
      console.log(data);
      this.listUnidades = data;
    }, error => {
      console.log(error);
    })
  }  
  eliminarUnidad(id: any){
    this._usuarioService.eliminarUnidad(id).subscribe(data =>{
      this.toastr.error('La unidad se eliminó con exito', 'Unidad Eliminada');
      this.obtenerUnidad();
    }, error => {
      console.log(error);
    })
    
  }
}
