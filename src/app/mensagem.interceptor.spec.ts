import { TestBed } from '@angular/core/testing';

import { MensagemInterceptor } from './mensagem.interceptor';

describe('MensagemInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MensagemInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MensagemInterceptor = TestBed.inject(MensagemInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
