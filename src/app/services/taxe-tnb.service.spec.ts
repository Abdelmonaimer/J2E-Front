import { TestBed } from '@angular/core/testing';

import { TaxeTnbService } from './taxe-tnb.service';

describe('TaxeTnbService', () => {
  let service: TaxeTnbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxeTnbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
