import { TestBed } from '@angular/core/testing';

import { OrederService } from './oreder.service';

describe('OrederService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrederService = TestBed.get(OrederService);
    expect(service).toBeTruthy();
  });
});
