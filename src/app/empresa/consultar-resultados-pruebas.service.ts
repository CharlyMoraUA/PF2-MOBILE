import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultarResultadosPruebasService {

  private apiUrl = environment.baseUrl
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ sessionStorage.getItem("empresa-token")
    })
  }; 

  obtenerPruebas(documento: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}candidato/pruebas/${documento}`, this.httpOptions);
  }


  obtenerEmpleado(documento: string): Observable<any> {
    return this.http.get<any>(`${environment.urlBaseEquipos}empleados/${documento}`, this.httpOptions);
  }


  postReview(id_candidato:any, mensaje:any, promedio:any, token: string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.post<any>(environment.urlBaseEquipos+"proyectos/evaluacion/"+id_candidato, {
      
        "evaluacion": mensaje,
        "puntaje":promedio
    
    }, { headers: headers });
  }


}
