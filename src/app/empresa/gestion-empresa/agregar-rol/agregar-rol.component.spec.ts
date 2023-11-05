import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { AgregarRolComponent } from './agregar-rol.component';
import { ConsultarEquipoService } from 'app/empresa/consultar-equipo.service';

describe('AgregarRolComponent', () => {
  let component: AgregarRolComponent;
  let fixture: ComponentFixture<AgregarRolComponent>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<AgregarRolComponent>>;
  let mockConsultarEquipoService: jasmine.SpyObj<ConsultarEquipoService>;
  let mockToastrService: jasmine.SpyObj<ToastrService>;

  beforeEach(() => {
    mockDialogRef = jasmine.createSpyObj(['close']);
    mockConsultarEquipoService = jasmine.createSpyObj('ConsultarEquipoService', ['obtenerRoles', 'asociarRol']);
    mockToastrService = jasmine.createSpyObj('ToastrService', ['success']);

    TestBed.configureTestingModule({
      declarations: [AgregarRolComponent],
      imports: [FormsModule, ReactiveFormsModule, ToastrModule.forRoot()],
      providers: [
        FormBuilder,
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: ConsultarEquipoService, useValue: mockConsultarEquipoService },
        { provide: ToastrService, useValue: mockToastrService },
      ],
    });

    fixture = TestBed.createComponent(AgregarRolComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // it('should initialize detallarRolForm in ngOnInit', () => {
  //   component.ngOnInit();
  //   expect(component.detallarRolForm).toBeDefined();
  // });

  it('should call consultarEquipoService.obtenerRoles and update listaRoles in ngOnInit', () => {
    const mockResponse = { roles: [{ rol: 'Role1', is_included: false }] };
    mockConsultarEquipoService.obtenerRoles.and.returnValue(of(mockResponse));

    component.ngOnInit();

    expect(mockConsultarEquipoService.obtenerRoles).toHaveBeenCalledWith(component.id_selected_equipo);
    expect(component.listaRoles).toEqual(mockResponse.roles);
  });

  it('should call consultarEquipoService.asociarRol and close modal in agregarRol', () => {
    const mockRol = { rol: 1 };
    const mockResponse = { status_code: 200 };
    mockConsultarEquipoService.asociarRol.and.returnValue(of(mockResponse));

    component.agregarRol(mockRol);

    expect(mockConsultarEquipoService.asociarRol).toHaveBeenCalledWith(mockRol.rol, component.id_selected_equipo);
    expect(mockToastrService.success).toHaveBeenCalledWith('Confirmación', 'Rol asociado con exito');
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should close modal in closeModal', () => {
    component.closeModal();
    expect(component.id_selected_equipo).toEqual(0);
    expect(mockDialogRef.close).toHaveBeenCalled();
  });
});
