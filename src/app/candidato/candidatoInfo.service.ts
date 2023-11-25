import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { infoTecnica } from './representaciones/infoTecnica';

@Injectable({
  providedIn: 'root'
})
export class CandidatoInfoService {

  private apiUrl = environment.baseUrl + 'candidato/';

constructor(private http: HttpClient) { }

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}; 

obtenerInfoCandidato(id_candidato, token: string): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  })
  return this.http.get<any>(this.apiUrl+"detalle?id_candidato="+id_candidato, { headers: headers});
}

obtenerInfoTecnica(id_candidato, token: string): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  })
  return this.http.get<any>(this.apiUrl+"infoTecnica?id_candidato="+id_candidato, { headers: headers})
}

agregarInfoTecnica(infotecnica: infoTecnica, token: string): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  })
  return this.http.post<any>(this.apiUrl+"infoTecnica", infotecnica, { headers: headers });
}

obtenerInfoAcademica(id_candidato, token: string): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  })
  return this.http.get<any>(this.apiUrl+"infoAcademica?id_candidato="+id_candidato, { headers: headers})
}

agregarInfoAcademica(institucion:any,titulo:any,fecha_inicio:any,fecha_fin:any,id_candidato:any,token: string): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  })
  return this.http.post<any>(this.apiUrl+"infoAcademica", 
  {
    "institucion":institucion,
    "titulo":titulo,
    "fecha_inicio":fecha_inicio,
    "fecha_fin":fecha_fin,
    "id_candidato":id_candidato
  }
  , { headers: headers });
}

}
