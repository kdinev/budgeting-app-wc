import { expect } from '@open-wc/testing';
import Statistics from './statistics.js';

describe('Statistics', () => {
  it('<app-statistics> is an instance of Statistics', async () => {
    const element = document.createElement('app-statistics');
    expect(element).to.be.instanceOf(Statistics);
  });
});
