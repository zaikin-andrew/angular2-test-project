import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2TestProjectAppComponent } from '../app/angular2-test-project.component';

beforeEachProviders(() => [Angular2TestProjectAppComponent]);

describe('App: Angular2TestProject', () => {
  it('should create the app',
      inject([Angular2TestProjectAppComponent], (app: Angular2TestProjectAppComponent) => {
    expect(app).toBeTruthy();
  }));
  
});
