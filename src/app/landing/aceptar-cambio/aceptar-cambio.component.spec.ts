import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarCambioComponent } from './aceptar-cambio.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';

describe('AceptarCambioComponent', () => {
  let component: AceptarCambioComponent;
  let fixture: ComponentFixture<AceptarCambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot(),
        MatDialogModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })
      ],
      declarations: [ AceptarCambioComponent ],
      providers: [ {
        provide: MatDialogRef,
        useValue: {}
      }, ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceptarCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
