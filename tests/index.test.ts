import { merge } from '../src/index';

describe('testing merge function in index.ts file', () => {
  const col_1 = [1, 3, 5, 7, 9];
  const col_2 = [2, 4, 6, 8];

  test('both collections are not empty', () => {
    expect(merge(col_1, col_2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('the first collection is empty', () => {
    expect(merge([], col_2)).toEqual([2, 4, 6, 8]);
  });

  test('the second collection is empty', () => {
    expect(merge(col_1, [])).toEqual([1, 3, 5, 7, 9]);
  });

  test('both collections are empty', () => {
    expect(merge([], [])).toEqual([]);
  });
});
