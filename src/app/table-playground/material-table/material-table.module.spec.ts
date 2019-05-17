import { MaterialTableModule } from './material-table.module';

describe('MaterialTableModule', () => {
  let materialTableModule: MaterialTableModule;

  beforeEach(() => {
    materialTableModule = new MaterialTableModule();
  });

  it('should create an instance', () => {
    expect(materialTableModule).toBeTruthy();
  });
});
