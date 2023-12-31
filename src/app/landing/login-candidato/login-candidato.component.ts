import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionCandidatoService } from '../autenticacion-candidato.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { CambioContrasenaComponent } from '../cambio-contrasena/cambio-contrasena.component';
import { AceptarCambioComponent } from '../aceptar-cambio/aceptar-cambio.component';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login-candidato',
  templateUrl: './login-candidato.component.html',
  styleUrls: ['./login-candidato.component.scss']
})
export class LoginCandidatoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private autenticacionCandidatoService: AutenticacionCandidatoService,
    private toastr: ToastrService,
    public dialog: MatDialog,
    public translate: TranslateService
  ) {
      // Register translation languages
      translate.addLangs(['en', 'es']);
      // Set default language
      translate.setDefaultLang('es');
   }

  error: boolean = false
  helper = new JwtHelperService();
  loginCandidatoForm!: FormGroup;
  hide = true;

  ngOnInit(): void {

    this.loginCandidatoForm = this.formBuilder.group({
      usuario: ["", Validators.required],
      clave: ["", Validators.required],
    })

  }


  loginCandidato(usuario: string, clave: string){
    this.error = false
    this.autenticacionCandidatoService.candidatoLogIn(usuario, clave)
      .subscribe(res => {
        sessionStorage.setItem('candidato-token', res.token);
        sessionStorage.setItem('id_candidato', res.info_candidato.id);
        sessionStorage.setItem('usertype', 'candidato');
        console.log("Candidato autenticado con token: "+res.token);
        this._router.navigate(["dashboard"])
      },
        error => {
          console.log(error);
          this.error = true
          this.toastr.error("Error", "Authentication failed: "+error.error.mensaje,{
            positionClass: 'toast-center-center'} )
        })

        return true;
  }

  irCrearCuentaCandidato(){
    this._router.navigate(["candidato"])
  }

  openCambioModal(){
    const dialogRef = this.dialog.open(CambioContrasenaComponent, {
      height: '300px',
      width: '400px',
      panelClass: 'my-custom-dialog-class',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.done){
        const dialogRef2 = this.dialog.open(AceptarCambioComponent, {
          height: '200px',
          width: '400px',
          panelClass: 'my-custom-dialog-class',
        });
      }
    })
    return true;
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}