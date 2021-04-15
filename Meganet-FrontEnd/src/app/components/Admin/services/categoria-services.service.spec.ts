import { TestBed } from '@angular/core/testing';

import { CategoriaServicesService } from './categoria-services.service';

describe('CategoriaServicesService', () => {
  let service: CategoriaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
