import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';
import { LoginEmpresaComponent } from './login-empresa.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';

describe('LoginEmpresaComponent', () => {
  let component: LoginEmpresaComponent;
  let fixture: ComponentFixture<LoginEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        ReactiveFormsModule, 
        FormsModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })
      ],
      declarations: [ LoginEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 2 controls', () => {
    expect(component.loginEmpresaForm.contains('usuario')).toBeTruthy();
    expect(component.loginEmpresaForm.contains('clave')).toBeTruthy();
  });

  it('should be true when invalid form', () => {
    component.loginEmpresaForm.controls['usuario'].setValue(faker.datatype.string());
    component.loginEmpresaForm.controls['clave'].setValue('');
    expect(component.loginEmpresaForm.invalid).toBeTruthy();
  });

  it('should be true when valid form', () => {
    component.loginEmpresaForm.controls['usuario'].setValue(faker.datatype.string());
    component.loginEmpresaForm.controls['clave'].setValue(faker.datatype.string());
    expect(component.loginEmpresaForm.valid).toBeTruthy();
  });

  it('should execute Login', () => {
    expect(component.loginEmpresa("marthas","clave123")).toEqual(true);
  });
});
