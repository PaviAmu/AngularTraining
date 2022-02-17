import { TestBed } from '@angular/core/testing';

import { AutoapiService } from './autoapi.service';

describe('AutoapiService', () => {
  let service: AutoapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
