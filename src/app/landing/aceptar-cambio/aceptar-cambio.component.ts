import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-aceptar-cambio',
  templateUrl: './aceptar-cambio.component.html',
  styleUrls: ['./aceptar-cambio.component.scss']
})
export class AceptarCambioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AceptarCambioComponent>,
    public translate: TranslateService) {
      // Register translation languages
      translate.addLangs(['en', 'es']);
      // Set default language
      translate.setDefaultLang('es');
     }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close()
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
