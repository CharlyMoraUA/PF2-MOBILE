import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConsultarEquipoService } from './consultar-equipo.service';
import { environment } from 'environments/environment';
import { Empresa } from './representaciones/empresa';

describe('ConsultarEquipoService', () => {
  let service: ConsultarEquipoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsultarEquipoService]
    });

    service = TestBed.inject(ConsultarEquipoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should retrieve roles from the API via GET', () => {
    const mockRolesResponse = [
      { id_rol: 1, nombre: 'rol1', descripcion: 'desc1', is_included: true },
      { id_rol: 2, nombre: 'rol2', descripcion: 'desc2', is_included: false },
      // Add more mock data as needed
    ];

    service.obtenerRoles(1).subscribe(roles => {
      expect(roles).toEqual(mockRolesResponse);
    });

    const req = httpTestingController.expectOne(`${environment.urlBaseEquipos}equipos/rol?equipo_id=1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRolesResponse); // Provide the mock response data
  });

  it('should associate a role via POST', () => {
    const mockAsociarResponse = { Mensaje: 'Rol asociado con Éxito', status_code: 200 };
    const mockRequestData = { id_rol: 1, id_equipo: 1 };

    service.asociarRol(mockRequestData.id_rol, mockRequestData.id_equipo).subscribe(response => {
      expect(response).toEqual(mockAsociarResponse);
    });

    const req = httpTestingController.expectOne(`${environment.urlBaseEquipos}equipos/rol/asociar`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockRequestData);
    req.flush(mockAsociarResponse); // Provide the mock response data
  });

  it('should disassociate a role via DELETE', () => {
    const mockDesasociarResponse = null; // For 204 No Content response

    service.desAsociarRol(1, 1).subscribe(response => {
      expect(response).toBeNull();
    });

    const req = httpTestingController.expectOne(`${environment.urlBaseEquipos}equipos/rol/asociar?id_rol=1&id_equipo=1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockDesasociarResponse); // Provide the mock response data
  });

  // Add more tests as needed

});
