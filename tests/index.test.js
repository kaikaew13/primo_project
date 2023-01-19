"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe('testing merge function in index.ts file', () => {
    const col_1 = [1, 3, 5, 7, 9];
    const col_2 = [2, 4, 6, 8];
    test('both collections are not empty', () => {
        expect((0, index_1.merge)(col_1, col_2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test('the first collection is empty', () => {
        expect((0, index_1.merge)([], col_2)).toEqual([2, 4, 6, 8]);
    });
    test('the second collection is empty', () => {
        expect((0, index_1.merge)(col_1, [])).toEqual([1, 3, 5, 7, 9]);
    });
    test('both collections are empty', () => {
        expect((0, index_1.merge)([], [])).toEqual([]);
    });
    test('collections contain elements with the same value', () => {
        expect((0, index_1.merge)(col_2, col_2)).toEqual([2, 2, 4, 4, 6, 6, 8, 8]);
    });
});
