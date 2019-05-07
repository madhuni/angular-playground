import { CvaPlaygroundRoutingModule } from './cva-playground-routing.module';

describe('CvaPlaygroundRoutingModule', () => {
  let cvaPlaygroundRoutingModule: CvaPlaygroundRoutingModule;

  beforeEach(() => {
    cvaPlaygroundRoutingModule = new CvaPlaygroundRoutingModule();
  });

  it('should create an instance', () => {
    expect(cvaPlaygroundRoutingModule).toBeTruthy();
  });
});
