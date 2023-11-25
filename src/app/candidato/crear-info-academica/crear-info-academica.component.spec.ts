import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInfoAcademicaComponent } from './crear-info-academica.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';

describe('CrearInfoAcademicaComponent', () => {
  let component: CrearInfoAcademicaComponent;
  let fixture: ComponentFixture<CrearInfoAcademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInfoAcademicaComponent ],
      imports: [HttpClientTestingModule, 
        MatFormFieldModule ,
        ReactiveFormsModule, 
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

    fixture = TestBed.createComponent(CrearInfoAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
