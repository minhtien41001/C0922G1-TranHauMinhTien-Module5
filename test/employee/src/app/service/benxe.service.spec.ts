import { TestBed } from '@angular/core/testing';

import { BenxeService } from './benxe.service';

describe('BenxeService', () => {
  let service: BenxeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenxeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
