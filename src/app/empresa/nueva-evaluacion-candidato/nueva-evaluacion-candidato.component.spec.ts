import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaEvaluacionCandidatoComponent } from './nueva-evaluacion-candidato.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';

describe('NuevaEvaluacionCandidatoComponent', () => {
  let component: NuevaEvaluacionCandidatoComponent;
  let fixture: ComponentFixture<NuevaEvaluacionCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaEvaluacionCandidatoComponent ],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaEvaluacionCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
