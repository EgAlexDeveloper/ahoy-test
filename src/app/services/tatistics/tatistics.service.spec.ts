import { TestBed } from '@angular/core/testing';

import { TatisticsService } from './tatistics.service';

describe('TatisticsService', () => {
  let service: TatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
