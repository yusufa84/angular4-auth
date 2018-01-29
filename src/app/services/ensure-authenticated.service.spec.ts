import { TestBed, inject } from '@angular/core/testing';

import { EnsureAuthenticatedService } from './ensure-authenticated.service';

describe('EnsureAuthenticatedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsureAuthenticatedService]
    });
  });

  it('should ...', inject([EnsureAuthenticatedService], (service: EnsureAuthenticatedService) => {
    expect(service).toBeTruthy();
  }));
});
