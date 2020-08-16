import { sum } from './math';

sum(10, 20); //

describe('math.js', () => {
  test('10 + 20 = 30', () => {
    // const result = ;
    expect(sum(10, 20)).toBe(30);
  });
});
