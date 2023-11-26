import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConsultarResultadosPruebasService } from '../consultar-resultados-pruebas.service';

@Component({
  selector: 'app-nueva-evaluacion-candidato',
  templateUrl: './nueva-evaluacion-candidato.component.html',
  styleUrls: ['./nueva-evaluacion-candidato.component.scss']
})
export class NuevaEvaluacionCandidatoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<NuevaEvaluacionCandidatoComponent>,
  private consultarResultadosPruebasService: ConsultarResultadosPruebasService) { }

  mensaje="";
  selectedScore=1;

  ngOnInit() {
    return true;
  }

  close(){
    this.dialogRef.close()
  }

  postReview(){
    this.consultarResultadosPruebasService.postReview(this.data.id_candidato,this.mensaje,this.selectedScore,sessionStorage.getItem("empresa-token")).subscribe(result=>{
      this.close()
    })
    return true;
  }

}
