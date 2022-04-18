import { RaraModule } from './rara.module';

describe('RaraModule', () => {
  let raraModule: RaraModule;

  beforeEach(() => {
    raraModule = new RaraModule();
  });

  it('should create an instance', () => {
    expect(raraModule).toBeTruthy();
  });
});
