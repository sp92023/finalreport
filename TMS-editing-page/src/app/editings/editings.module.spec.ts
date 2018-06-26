import { EditingsModule } from './editings.module';

describe('EditingsModule', () => {
  let editingsModule: EditingsModule;

  beforeEach(() => {
    editingsModule = new EditingsModule();
  });

  it('should create an instance', () => {
    expect(editingsModule).toBeTruthy();
  });
});
