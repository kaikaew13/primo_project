"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe('testing index file', () => {
    test('dsafs', () => {
        expect((0, index_1.merge)([1, 2], [3])).toEqual([1, 2, 3]);
    });
});
