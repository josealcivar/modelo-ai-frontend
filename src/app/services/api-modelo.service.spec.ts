import { TestBed } from '@angular/core/testing';

import { ApiModeloService } from './api-modelo.service';

describe('ApiModeloService', () => {
  let service: ApiModeloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiModeloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
