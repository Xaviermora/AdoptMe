import { TestBed } from '@angular/core/testing';

import { CiudadesService } from './ciudades.service';

describe('CiudadesService', () => {
  let service: CiudadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiudadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
