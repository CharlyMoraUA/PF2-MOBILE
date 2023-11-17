import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ResultadosEntrevistasService } from 'app/candidato/resultadosEntrevistas.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resultadosEntrevistas',
  templateUrl: './resultadosEntrevistas.component.html',
  styleUrls: ['./resultadosEntrevistas.component.scss']
})
export class ResultadosEntrevistasComponent implements OnInit {

  entrevistasForm!: FormGroup;
  showTable: boolean = false;

  constructor(
    private resultadosEntrevistasService : ResultadosEntrevistasService,
    private formBuilder: FormBuilder,
    public translate: TranslateService,
    private toastr: ToastrService,
    private _router: Router
  ) {
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
   }

   lista: string[] = [];

  ngOnInit() {
    this.entrevistasForm = this.formBuilder.group({
      tipo_doc: ["", Validators.required],
      num_doc: ["", Validators.required]
    })
  }

  obtenerResultados(entrevista){
    this.showTable = false
    console.info("Info del formulario: ", entrevista)
    this.resultadosEntrevistasService.obtenerResulEntrevistas(entrevista.tipo_doc, entrevista.num_doc, sessionStorage.getItem("id_empresa"), sessionStorage.getItem("empresa-token")).subscribe(res=>{
      this.lista = res.message
      console.log("datos retornados en la lista: ", this.lista)
      if (res.status_code == "200"){
        this.showTable = true
        this.toastr.success("Información técnica mostrada correctamente")
      }else {
        this.toastr.error("Error", res.message)
      }
    },
    error => {
      this.toastr.error("Error", error.error.message)
    }
    )
  }

  backToInfo(){
    this._router.navigate(["dashboard"])
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
