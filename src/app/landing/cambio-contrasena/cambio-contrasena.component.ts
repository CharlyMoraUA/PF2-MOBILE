import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AutenticacionCandidatoService } from '../autenticacion-candidato.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cambio-contrasena',
  templateUrl: './cambio-contrasena.component.html',
  styleUrls: ['./cambio-contrasena.component.scss']
})
export class CambioContrasenaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CambioContrasenaComponent>,
              private autenticacionCandidatoService: AutenticacionCandidatoService,
              private toastr: ToastrService,
              public translate: TranslateService) {
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
               }
  
  email = "";

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close({ done: false })
  }

  send(){
    this.autenticacionCandidatoService.sendRecoveryEmail(this.email).subscribe(response => {
      console.log(response)
      if(response.status_code == 200){
        this.dialogRef.close({ done: true })
      }else{
        this.toastr.error("Se presento un error al intentar enviar el correo de recuperacion")
      }
    }, error=>{
      this.toastr.error("Se presento un error al intentar enviar el correo de recuperacion")
    }
    )
  }


  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
