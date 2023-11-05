/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultarFichasService } from './consultar-fichas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: ConsultarFichas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsultarFichasService]
    });
  });

  it('should ...', inject([ConsultarFichasService], (service: ConsultarFichasService) => {
    expect(service).toBeTruthy();
  }));
});
