import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReUsuario } from 'src/app/models/reUsuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listUsuario: ReUsuario[] = [];

  constructor(private _uService: UsuarioService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    this._uService.getUsuario().subscribe(data => {
      console.log(data);
      this.listUsuario = data;
    }, error => {
      console.log(error);
    })
  }  
  eliminarUsuario(id: any){
    this._uService.eliminarUsuario(id).subscribe(data =>{
      this.toastr.error('El usuario se eliminó con exito', 'Usuario Eliminado');
      this.obtenerUsuario();
    }, error => {
      console.log(error);
    })
    
  }
}

