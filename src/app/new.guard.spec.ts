import { TestBed, async, inject } from '@angular/core/testing';

import { NewGuard } from './new.guard';

describe('NewGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewGuard]
    });
  });

  it('should ...', inject([NewGuard], (guard: NewGuard) => {
    expect(guard).toBeTruthy();
  }));
});
