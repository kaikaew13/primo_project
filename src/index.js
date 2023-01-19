"use strict";
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
        result.push(collection_2[j]);
    }
    return result;
}
console.log(merge([1, 4, 7, 9], [2, 5, 6, 8]));
