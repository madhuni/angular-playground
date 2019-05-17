import { PrimeNgTableModule } from './prime-ng-table.module';

describe('PrimeNgTableModule', () => {
  let primeNgTableModule: PrimeNgTableModule;

  beforeEach(() => {
    primeNgTableModule = new PrimeNgTableModule();
  });

  it('should create an instance', () => {
    expect(primeNgTableModule).toBeTruthy();
  });
});
