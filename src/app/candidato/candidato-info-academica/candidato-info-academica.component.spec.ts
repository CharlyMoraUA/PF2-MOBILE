import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoInfoAcademicaComponent } from './candidato-info-academica.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

describe('CandidatoInfoAcademicaComponent', () => {
  let component: CandidatoInfoAcademicaComponent;
  let fixture: ComponentFixture<CandidatoInfoAcademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoInfoAcademicaComponent ],
      imports: [HttpClientTestingModule, 
        MatFormFieldModule ,
        ReactiveFormsModule, 
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        FormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoInfoAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('NgOnInit Should be true', () => {
    expect(component.ngOnInit()).toBeTruthy();
  });

  it('consultarInfoAcademica Should be true', () => {
    expect(component.consultarInfoAcademica(1)).toBeTruthy();
  });
});
