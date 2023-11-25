import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-evaluacion-candidato',
  templateUrl: './evaluacion-candidato.component.html',
  styleUrls: ['./evaluacion-candidato.component.scss']
})
export class EvaluacionCandidatoComponent implements OnInit {

  constructor(public translate: TranslateService,) {
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es'); 
  }

  ngOnInit(): void {
  }

  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
