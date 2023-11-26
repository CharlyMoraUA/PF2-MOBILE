import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { infoLaboral } from '../representaciones/infoLaboral';
import { CandidatoInfoService } from '../candidatoInfo.service';

@Component({
  selector: 'app-nuevaInfoLaboral',
  templateUrl: './nuevaInfoLaboral.component.html',
  styleUrls: ['./nuevaInfoLaboral.component.scss']
})
export class NuevaInfoLaboralComponent implements OnInit {

  nuevaInfoLaboralForm!: FormGroup;
  error: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _router: Router,
    private candidatoInfoService: CandidatoInfoService,
    public translate: TranslateService
  ) {
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
   }

  ngOnInit() {
    this.nuevaInfoLaboralForm = this.formBuilder.group({
      cargo: ["", Validators.required],
      ano_inicio: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[- +()0-9]+')]],
      ano_fin: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[- +()0-9]+')]],
      empresa: ["", Validators.required],
      descripcion: []
    })
  }

  agregaInfoLaboral(infoLaboral : infoLaboral){
    let id_candidato: number = + sessionStorage.getItem("id_candidato")
    infoLaboral.id_candidato = id_candidato
    this.candidatoInfoService.agregarInfoLaboral(infoLaboral, sessionStorage.getItem("candidato-token")).subscribe(res =>{
      if (res.status_code == "201"){
        this.toastr.success("Información laboral guardada correctamente")
        console.info("Información laboral guardada correctamente: ", res)
        this._router.navigate(["info_laboral"])
      }else{
        this.error = true
        this.toastr.error("Error", res.message)
      }
    })

  }

  backToInfoLaboral(){
    this._router.navigate(["info_laboral"])
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
