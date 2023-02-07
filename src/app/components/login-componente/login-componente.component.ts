import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import {ToastrService} from 'ngx-toastr';
import { LoginServicioService } from 'src/app/services/login-servicio.service';

@Component({
  selector: 'app-login-componente',
  templateUrl: './login-componente.component.html',
  styleUrls: ['./login-componente.component.css']
})
export class LoginComponenteComponent implements OnInit {

  constructor(){ }

  ngOnInit(): void {
  }


}