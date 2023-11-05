import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConsultarEquipoService } from 'app/empresa/consultar-equipo.service';
import { ConsultarFichasService } from 'app/empresa/consultar-fichas.service';
import { RolInput } from 'app/empresa/representaciones/rol_input';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-rol',
  templateUrl: './agregar-rol.component.html',
  styleUrls: ['./agregar-rol.component.scss']
})
export class AgregarRolComponent implements OnInit {
  detallarRolForm!: FormGroup;
  rol=0
  listaRoles: any=[];

  constructor(
    private formBuilder: FormBuilder,
    public consultarEquipoService: ConsultarEquipoService,
    public toastr: ToastrService,
    public dialogRef: MatDialogRef<AgregarRolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.detallarRolForm = this.formBuilder.group({
      rol: [0, [Validators.required]],
    });
    this.nombre = this.data.nombre;
    this.id_selected_equipo = this.data.id_equipo;
  }
  

  nombre = this.data.nombre
  id_selected_equipo = this.data.id_equipo

  ngOnInit(): void {
    this.detallarRolForm = this.formBuilder.group({
      rol: [0, [Validators.required]],
    });
    console.log(this.data)
    this.consultarEquipoService.obtenerRoles(this.id_selected_equipo).subscribe(resp=>{
      if (resp.roles) {
      let tempRoles: any[] = resp.roles
      let rolesFiltered = tempRoles.filter(x=>x.is_included==false)
      console.log(rolesFiltered)
      this.listaRoles=rolesFiltered}
    })

  }

  agregarRol(rol: any){
    if (!this.detallarRolForm) {
      // Handle the case where form is not initialized
      return;
    }
    this.consultarEquipoService.asociarRol(rol.rol,this.id_selected_equipo).subscribe(res=>{
      console.log("res")
      console.log(res)
      if (res.status_code==200){
        this.toastr.success("Confirmación", "Rol asociado con exito")
        this.dialogRef.close();
      }
    })
  }


  closeModal() {
    this.id_selected_equipo=0;
    this.dialogRef.close();
  }

}
