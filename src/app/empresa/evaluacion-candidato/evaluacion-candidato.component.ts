import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConsultarResultadosPruebasService } from '../consultar-resultados-pruebas.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NuevaEvaluacionCandidatoComponent } from '../nueva-evaluacion-candidato/nueva-evaluacion-candidato.component';

@Component({
  selector: 'app-evaluacion-candidato',
  templateUrl: './evaluacion-candidato.component.html',
  styleUrls: ['./evaluacion-candidato.component.scss']
})
export class EvaluacionCandidatoComponent implements OnInit {

  constructor(public _router: Router,
    private consultarResultadosPruebasService: ConsultarResultadosPruebasService,
    public translate: TranslateService,
    public dialog: MatDialog,) {
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es'); 
  }

  candidateDocument="";
  candidateName = ""
  id_candidate = -1

  ngOnInit(){
    return true;
  }

  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

  backToHome(){
    this._router.navigate(["dashboard"])
  }

  newEvaluation(){

    const dialogRef = this.dialog.open(NuevaEvaluacionCandidatoComponent, {
      data: {id_candidato: this.id_candidate},
      height: '450px',
      width: '400px',
      panelClass: 'custom-modalbox',
    });

    dialogRef.afterClosed().subscribe(result => {
    });

    return true;

  }

  searchCandidate(){
    this.consultarResultadosPruebasService.obtenerEmpleado(this.candidateDocument).subscribe(response=>{
      this.candidateName = response.nombre
      this.id_candidate = response.id_candidato
    });
    return true;
  }
}
