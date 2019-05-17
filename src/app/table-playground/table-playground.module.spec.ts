import { TablePlaygroundModule } from './table-playground.module';

describe('TablePlaygroundModule', () => {
  let tablePlaygroundModule: TablePlaygroundModule;

  beforeEach(() => {
    tablePlaygroundModule = new TablePlaygroundModule();
  });

  it('should create an instance', () => {
    expect(tablePlaygroundModule).toBeTruthy();
  });
});
