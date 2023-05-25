import { TestBed } from '@angular/core/testing';

import { JsonServiceService } from './json-service.service';

describe('JsonServiceService', () => {
  let service: JsonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
