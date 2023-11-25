import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogData, DialogOverviewExampleDialog } from '../candidato-infoTecnica/candidatoInfoTecnica/candidatoInfoTecnica.component';
import { CandidatoInfoService } from '../candidatoInfo.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CrearInfoAcademicaComponent } from '../crear-info-academica/crear-info-academica.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-candidato-info-academica',
  templateUrl: './candidato-info-academica.component.html',
  styleUrls: ['./candidato-info-academica.component.scss']
})
export class CandidatoInfoAcademicaComponent implements OnInit {

  constructor(private candidatoInfoService: CandidatoInfoService,
    private _router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService,
    public translate: TranslateService) { 
      translate.addLangs(['en', 'es']);
      // Set default language
      translate.setDefaultLang('es'); 
    }

  institucion:String
  titulo:String
  fecha_inicio:String
  fecha_fin:String
  error: boolean = false

  lista = [];
  ngOnInit() {
    this.consultarInfoAcademica(sessionStorage.getItem("id_candidato"))
    return true;
  }

  consultarInfoAcademica(id_candidato){
    this.candidatoInfoService.obtenerInfoAcademica(id_candidato, sessionStorage.getItem("candidato-token")).subscribe(candidato=>{
      this.lista = candidato.response
      console.log("La lista es: ", this.lista)
    })
    return true;
  }

  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

  backToInfo(){
    this._router.navigate(["dashboard"])
    return true;
  }

  openDialog() {
    const dialogRef = this.dialog.open(CrearInfoAcademicaComponent, {
      data: {},
      height: '450px',
      width: '400px',
      panelClass: 'custom-modalbox',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("RESULT", result)
      this.institucion= result.institucion
      this.titulo= result.titulo
      let pipe = new DatePipe('en-US')
      this.fecha_inicio= pipe.transform(result.fecha_inicio, "YYYY-MM-dd")
      this.fecha_fin= pipe.transform(result.fecha_fin, "YYYY-MM-dd")
      if (this.institucion && this.titulo && this.fecha_inicio && this.fecha_fin) {
        this.guardarInfoAcademica()
      }
      
    });

    return true;
    
  }

  guardarInfoAcademica(){
    let id_candidato: number = + sessionStorage.getItem("id_candidato")
    console.log("El id del candidato es: ", id_candidato)
    this.candidatoInfoService.agregarInfoAcademica(this.institucion,this.titulo,this.fecha_inicio,this.fecha_fin,id_candidato, sessionStorage.getItem("candidato-token")).subscribe(res => {
      if (res.status_code == "201"){
        this.toastr.success("Información Academica guardada correctamente")
        console.info("Información Academica guardada correctamente: ", res)
        this.consultarInfoAcademica(sessionStorage.getItem("id_candidato"))
      }else{
        this.error = true
        this.toastr.error("Error", res.message)
      }
    })
    return true;
  }

}
