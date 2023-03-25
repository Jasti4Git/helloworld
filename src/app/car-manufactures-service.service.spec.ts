import { TestBed } from '@angular/core/testing';

import { CarManufacturesServiceService } from './car-manufactures-service.service';

describe('CarManufacturesServiceService', () => {
  let service: CarManufacturesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarManufacturesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
