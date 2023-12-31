/* tslint:disable:no-unused-variable */
/* import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CandidatoComponent } from './candidato.component';
import { Candidato } from '../representaciones/candidato';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { MatSelectModule } from '@angular/material/select';

describe('CandidatoCrearComponent', () => {
  let component: CandidatoComponent;
  let fixture: ComponentFixture<CandidatoComponent>;
  let debug: DebugElement;
  let h4: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        ReactiveFormsModule, 
        FormsModule,
        ToastrModule.forRoot(),
        MatSelectCountryModule,
        MatSelectModule
      ],
      declarations: [ CandidatoComponent ],
      providers: [
        FormBuilder,
        MatSelectCountryModule,
        MatSelectModule

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoComponent);
    component = fixture.componentInstance;

    component.candidatos = [
      new Candidato(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.datetime(),
        faker.datatype.string()
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with all required fields', () => {
    expect(component.candidatoForm.contains('tipo_doc')).toBeTruthy();
    expect(component.candidatoForm.contains('num_doc')).toBeTruthy();
    expect(component.candidatoForm.contains('nombre')).toBeTruthy();
    expect(component.candidatoForm.contains('usuario')).toBeTruthy();
    expect(component.candidatoForm.contains('clave')).toBeTruthy();
    expect(component.candidatoForm.contains('email')).toBeTruthy();
    expect(component.candidatoForm.contains('pais')).toBeTruthy();
    expect(component.candidatoForm.contains('ciudad')).toBeTruthy();
    expect(component.candidatoForm.contains('aspiracion_salarial')).toBeTruthy();
    expect(component.candidatoForm.contains('fecha_nacimiento')).toBeTruthy();
    expect(component.candidatoForm.contains('idiomas')).toBeTruthy();
  });

  it('should be true when invalid form', () => {
    component.candidatoForm.controls['tipo_doc'].setValue(faker.datatype.string());
    component.candidatoForm.controls['num_doc'].setValue(faker.datatype.string());
    component.candidatoForm.controls['nombre'].setValue(faker.datatype.string());
    component.candidatoForm.controls['usuario'].setValue(faker.datatype.string());
    component.candidatoForm.controls['clave'].setValue(faker.datatype.string());
    component.candidatoForm.controls['telefono'].setValue(faker.datatype.number());
    component.candidatoForm.controls['email'].setValue('');
    component.candidatoForm.controls['pais'].setValue(faker.datatype.string());
    component.candidatoForm.controls['ciudad'].setValue(faker.datatype.string());
    component.candidatoForm.controls['aspiracion_salarial'].setValue(faker.datatype.number());
    component.candidatoForm.controls['fecha_nacimiento'].setValue(faker.datatype.datetime);
    component.candidatoForm.controls['idiomas'].setValue(faker.datatype.string());
    expect(component.candidatoForm.invalid).toBeTruthy();
  });

});
 */