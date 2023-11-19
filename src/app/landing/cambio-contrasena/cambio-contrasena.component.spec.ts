import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioContrasenaComponent } from './cambio-contrasena.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';

describe('CambioContrasenaComponent', () => {
  let component: CambioContrasenaComponent;
  let fixture: ComponentFixture<CambioContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
        MatDialogModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })
      ],
      declarations: [ CambioContrasenaComponent ],
      providers: [ {
        provide: MatDialogRef,
        useValue: {}
      }, ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambioContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
