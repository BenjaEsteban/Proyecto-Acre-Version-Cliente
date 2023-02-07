import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ReUsuario } from 'src/app/models/reUsuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  UsuarioForm: FormGroup;
  titulo = 'Crear Usuario';
  id: String | null ;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _uService: UsuarioService,
              private aRouter: ActivatedRoute
    ) {
    this.UsuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      rol: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarUsuario(){
    console.log(this.UsuarioForm);

    console.log(this.UsuarioForm.get('usuario')?.value);

    const USUARIO: ReUsuario = {
      nombre: this.UsuarioForm.get('nombre')?.value,
      email: this.UsuarioForm.get('email')?.value,
      rol: this.UsuarioForm.get('rol')?.value,
    }
    if(this.id !== null){
      this._uService.editarUsuario(this.id, USUARIO).subscribe(data =>{
        this.toastr.info('El usuario fue actualizado con exito!','Usuario actualizado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.UsuarioForm.reset();
      })

    }else{
      console.log(USUARIO)
      this._uService.guardarUsuario(USUARIO).subscribe(data =>{
        this.toastr.success('El usuario fue guardada con exito!','Usuario Registrado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.UsuarioForm.reset();
      })
    }


  }
  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Usuario';
      this._uService.obtenerUsuario(this.id).subscribe(data => {
        this.UsuarioForm.setValue({
          nombre: data.nombre,
          email: data.email,
          rol: data.rol,
        })
      })
    }
  }
}

