import { TestBed } from '@angular/core/testing';

import { ProvinciasCiudadesService } from './provincias-ciudades.service';

describe('ProvinciasCiudadesService', () => {
  let service: ProvinciasCiudadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvinciasCiudadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
