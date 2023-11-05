import { Component, OnInit } from '@angular/core';import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private _router: Router,
    public translate: TranslateService) {
      
      // Register translation languages
      translate.addLangs(['en', 'es']);
      // Set default language
      translate.setDefaultLang('es');

    }

  ngOnInit() {
  }

  goToCandidate(){
    this._router.navigate(["login-candidato"])
  }

  goToCompany(){
    this._router.navigate(["login-empresa"])
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
