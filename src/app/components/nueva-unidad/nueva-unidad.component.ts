import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { ToastrService } from 'ngx-toastr';
import { LoginServicioService } from 'src/app/services/login-servicio.service';

@Component({
  selector: 'app-nueva-unidad',
  templateUrl: './nueva-unidad.component.html',
  styleUrls: ['./nueva-unidad.component.css']
})
export class NuevaUnidadComponent implements OnInit {
  nuevaUnidadForm: FormGroup;
  titulo = 'Crear Unidad';
  id: String | null ;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _unidadService: LoginServicioService,
              private aRouter: ActivatedRoute
    ) {
    this.nuevaUnidadForm = this.fb.group({
      nombre: ['', Validators.required],
      informacion: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarUnidad(){
    console.log(this.nuevaUnidadForm);

    console.log(this.nuevaUnidadForm.get('unidad')?.value);

    const UNIDAD: Usuario = {
      nombre: this.nuevaUnidadForm.get('nombre')?.value,
      informacion: this.nuevaUnidadForm.get('informacion')?.value
    }
    if(this.id !== null){
      this._unidadService.editarUnidad(this.id, UNIDAD).subscribe(data =>{
        this.toastr.info('La unidad fue actualizada con exito!','Unidad Actualizada');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.nuevaUnidadForm.reset();
      })

    }else{
      console.log(UNIDAD)
      this._unidadService.guardarUnidad(UNIDAD).subscribe(data =>{
        this.toastr.success('La unidad fue guardada con exito!','Unidad Registrada');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.nuevaUnidadForm.reset();
      })
    }


  }
  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Unidad';
      this._unidadService.obtenerUnidad(this.id).subscribe(data => {
        this.nuevaUnidadForm.setValue({
          nombre: data.nombre,
          informacion: data.informacion,
        })
      })
    }
  }
}
