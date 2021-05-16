import { TestBed, async, inject } from '@angular/core/testing';

import { LoginauthGuard } from './loginauth.guard';

describe('LoginauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginauthGuard]
    });
  });

  it('should ...', inject([LoginauthGuard], (guard: LoginauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
