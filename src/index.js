"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection_1, collection_2) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            result.push(collection_1[i++]);
        }
        else {
            result.push(collection_2[j++]);
        }
    }
    while (i < collection_1.length) {
        result.push(collection_1[i++]);
    }
    while (j < collection_2.length) {
        result.push(collection_2[j++]);
    }
    return result;
}
exports.merge = merge;
const col_1 = [1, 3, 5];
const col_2 = [2, 4, 6];
console.log(`the result of merging ${col_1} with ${col_2} = ${merge(col_1, col_2)}`);
