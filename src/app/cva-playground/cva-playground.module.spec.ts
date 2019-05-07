import { CvaPlaygroundModule } from './cva-playground.module';

describe('CvaPlaygroundModule', () => {
  let cvaPlaygroundModule: CvaPlaygroundModule;

  beforeEach(() => {
    cvaPlaygroundModule = new CvaPlaygroundModule();
  });

  it('should create an instance', () => {
    expect(cvaPlaygroundModule).toBeTruthy();
  });
});
