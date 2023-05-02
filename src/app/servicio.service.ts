import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from './model/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  getDatos():  Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>('http://localhost/ajax/usuarios/leer.php');
  }

  postDato(nuevo:Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>('http://localhost/ajax/usuarios/insertar.php',nuevo);
  }
}
