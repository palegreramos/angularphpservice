import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuarios } from '../model/usuarios';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss'],
})
export class InsertarComponent {
  newusuario: Usuarios = {
    id: 0,
    nombre: '',
    apellidos: '',
    dni: '',
  };
  newusuarioForm!: FormGroup;
  public message: string = '';
  public clasec: string = '';
  public clases: string = 'text-info';
  resp: any;

  constructor(
    private servicioService: ServicioService,
    private fb: FormBuilder
  ) {
    this.newusuarioForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      dni: ['', [Validators.required]],
    });
  }

  entradausuario() {
    if (this.newusuarioForm.invalid) {
      this.message = 'Por favor corrige los errores';
      this.clasec = 'text-danger';
    } else {
      this.clasec = 'text-success';
      this.newusuario = this.newusuarioForm.value;
      this.message = `Entrada correcta: ${this.newusuario.nombre} ${this.newusuario.apellidos} ${this.newusuario.dni}`;
      console.log('Entrada correcta', this.newusuario);
      this.servicioService
        .postDato(this.newusuario)
        .subscribe((resp) => (this.resp = resp));
    }
  }

  get nombre() {
    return this.newusuarioForm.get('nombre');
  }

  get apellidos() {
    return this.newusuarioForm.get('apellidos');
  }
  get dni() {
    return this.newusuarioForm.get('dni');
  }
}
