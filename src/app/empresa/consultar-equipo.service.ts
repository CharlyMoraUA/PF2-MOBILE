import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Empresa } from './representaciones/empresa';

@Injectable({
  providedIn: 'root'
})
export class ConsultarEquipoService {
  private apiUrl = environment.urlBaseEquipos

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ sessionStorage.getItem("empresa-token")
    })
  }; 

  obtenerEquipos(id_empresa: Empresa): Observable<any> {
    console.log(`${this.apiUrl}equipos/consultar?id_empresa=${id_empresa}`)
    return this.http.get<any>(`${this.apiUrl}equipos/consultar?id_empresa=${id_empresa}`, this.httpOptions);
  }
  obtenerRoles(id_equipo: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}equipos/rol?equipo_id=${id_equipo}`, this.httpOptions);
  }

  asociarRol(id_rol:number, id_equipo: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}equipos/rol/asociar`, { "id_rol": id_rol, "id_equipo": id_equipo } , this.httpOptions);
  }
  desAsociarRol(id_rol:number, id_equipo: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}equipos/rol/asociar?id_rol=${id_rol}&id_equipo=${id_equipo}`, this.httpOptions);
  }
}
