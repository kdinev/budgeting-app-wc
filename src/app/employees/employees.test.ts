import { expect } from '@open-wc/testing';
import Employees from './employees.js';

describe('Employees', () => {
  it('<app-employees> is an instance of Employees', async () => {
    const element = document.createElement('app-employees');
    expect(element).to.be.instanceOf(Employees);
  });
});
