import { Component, OnInit } from '@angular/core';
import { CandidatoInfoService } from '../candidatoInfo.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

export interface DialogData {
  cargo: string;
  ano_inicio: number;
  ano_fin: number;
  empresa: string;
  descripcion: string;
}

@Component({
  selector: 'app-candidato-infoLaboral',
  templateUrl: './candidato-infoLaboral.component.html',
  styleUrls: ['./candidato-infoLaboral.component.scss']
})
export class CandidatoInfoLaboralComponent implements OnInit {
  cargo: string = "";
  ano_inicio: number = null;
  ano_fin: number = null;
  empresa: string = "";
  descripcion: string = "";
  error: boolean = false
  lista: string[] = [];

  constructor(
    private candidatoInfoService: CandidatoInfoService,
    private _router: Router,
    public translate: TranslateService,
  ) {
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
    this.consultarInfoLaboral(sessionStorage.getItem("id_candidato"));
  }

  ngOnInit() {
  }

  consultarInfoLaboral(id_candidato){
    this.candidatoInfoService.obtenerInfoLaboral(id_candidato, sessionStorage.getItem("candidato-token")).subscribe(candidato=>{
      this.lista = candidato.response
    })
  }

  backToInfo(){
    this._router.navigate(["dashboard"])
  }

  nuevaInfoLaboral(){
    this._router.navigate(["nuevaInfoLaboral"])
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}