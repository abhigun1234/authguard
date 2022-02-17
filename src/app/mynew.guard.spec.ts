import { TestBed, async, inject } from '@angular/core/testing';

import { MynewGuard } from './mynew.guard';

describe('MynewGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MynewGuard]
    });
  });

  it('should ...', inject([MynewGuard], (guard: MynewGuard) => {
    expect(guard).toBeTruthy();
  }));
});
