/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultarEquipoService } from './consultar-equipo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: ConsultarEquipo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsultarEquipoService]
    });
  });

  it('should ...', inject([ConsultarEquipoService], (service: ConsultarEquipoService) => {
    expect(service).toBeTruthy();
  }));
});
