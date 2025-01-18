import { TestBed } from '@angular/core/testing';

import { WdApiService } from './wd-api.service';

describe('WdApiService', () => {
  let service: WdApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WdApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
