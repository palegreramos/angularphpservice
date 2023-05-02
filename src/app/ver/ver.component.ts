import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Usuarios } from '../model/usuarios';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss'],
})
export class VerComponent {
  datos!: Usuarios[];
  
  constructor(private servicioService: ServicioService) {

    servicioService.getDatos().subscribe(datos=>this.datos=datos);
  }
}
