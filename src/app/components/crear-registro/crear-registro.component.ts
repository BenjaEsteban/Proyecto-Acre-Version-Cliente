import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Registro } from 'src/app/models/registroModel';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.css']
})
export class CrearRegistroComponent implements OnInit {
  RegistroForm: FormGroup;
  titulo = 'Crear Registro';
  id: String | null ;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _registroService: RegistroService,
              private eRouter: ActivatedRoute
    ) {
    this.RegistroForm = this.fb.group({
      tipo: ['', Validators.required],
      informacion: ['', Validators.required],
    })
    this.id = this.eRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarRegistro(){
    console.log(this.RegistroForm);
    console.log(this.RegistroForm.get('Registro')?.value);

    const REGISTRO: Registro = {
      tipo: this.RegistroForm.get('tipo')?.value,
      informacion: this.RegistroForm.get('informacion')?.value
    }
    if(this.id !== null){
      this._registroService.editarRegistro(this.id, REGISTRO).subscribe(data =>{
        this.toastr.info('El registro fue actualizado con exito!','Registro Actualizado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.RegistroForm.reset();
      })

    }else{
      console.log(REGISTRO)
      this._registroService.guardarRegistro(REGISTRO).subscribe(data =>{
        this.toastr.success('El registro fue guardado con exito!','Registro Registrado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.RegistroForm.reset();
      })
    }
  }
  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Registro';
      this._registroService.obtenerRegistro(this.id).subscribe(data => {
        this.RegistroForm.setValue({
          tipo: data.tipo,
          informacion: data.informacion
        })
      })
    }
  }
}
