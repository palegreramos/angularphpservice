import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from './model/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  url:string='http://localhost/apps/leerescribirphp/server/';

  constructor(private http: HttpClient) { }

  getDatos():  Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(`${this.url}leer.php`);
  }

  postDato(nuevo:Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(`${this.url}insertar.php`,nuevo);
  }
}
