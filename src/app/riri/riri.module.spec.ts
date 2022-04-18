import { RiriModule } from './riri.module';

describe('RiriModule', () => {
  let ririModule: RiriModule;

  beforeEach(() => {
    ririModule = new RiriModule();
  });

  it('should create an instance', () => {
    expect(ririModule).toBeTruthy();
  });
});
