import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CandidatoInfoService } from 'app/candidato/candidatoInfo.service';
import { MatSelectModule } from '@angular/material/select';
import { infoTecnica } from 'app/candidato/representaciones/infoTecnica';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

export interface DialogData {
  tipo: string;
  valor: string;
}

@Component({
  selector: 'app-candidatoInfoTecnica',
  templateUrl: './candidatoInfoTecnica.component.html',
  styleUrls: ['./candidatoInfoTecnica.component.scss']
})

export class CandidatoInfoTecnicaComponent implements OnInit {

  tipo: string = "";
  valor: string = "";
  tipoHabilidad: string[] = ['ROL', 'TECNOLOGIA', 'LENGUAJE']
  error: boolean = false

  constructor(
    private candidatoInfoService: CandidatoInfoService,
    private _router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService,
    public translate: TranslateService
  ) {
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
   }

  lista: string[] = [];

  ngOnInit(): void {
    this.consultarInfoTecnica(sessionStorage.getItem("id_candidato"))
  }

  consultarInfoTecnica(id_candidato){
    this.candidatoInfoService.obtenerInfoTecnica(id_candidato, sessionStorage.getItem("candidato-token")).subscribe(candidato=>{
      this.lista = candidato.response
      console.log("La lista es: ", this.lista)
    })
  }

  backToInfo(){
    this._router.navigate(["dashboard"])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {tipoHabilidad: this.tipoHabilidad, valor: this.valor},
      height: '200px',
      width: '400px',
      panelClass: 'custom-modalbox',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.tipo = result.tipo
      this.valor = result.valor
      console.log("tipo: ", result.tipo)
      console.log("valor: ", result.valor)
      if (this.tipo && this.valor) {
        this.guardarInfoTecnica()
      }else{
        this.toastr.error("Error", "Faltan campos por llenar")
      }
    });
  }

  guardarInfoTecnica(){
    let id_candidato: number = + sessionStorage.getItem("id_candidato")
    let infotecnica = new infoTecnica(1, this.tipo, this.valor, id_candidato)
    this.candidatoInfoService.agregarInfoTecnica(infotecnica, sessionStorage.getItem("candidato-token")).subscribe(res => {
      if (res.status_code == "201"){
        this.toastr.success("Información técnica guardada correctamente")
        console.info("Información técnica guardada correctamente: ", res)
        setTimeout(() => {
          this.consultarInfoTecnica(sessionStorage.getItem("id_candidato"))
        }, 500)
      }else{
        this.error = true
        this.toastr.error("Error", res.message)
      }
    })
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./dialog-overview-example-dialog.scss'],
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatSelectModule],

  providers:[TranslateService]
})

export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}