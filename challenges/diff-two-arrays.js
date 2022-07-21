/**
 * 
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
 */

function diffArray(arr1, arr2) {
    const newArr = [];
    let testCase;
    for (let i = 0; i < arr1.length; i++) {
        testCase = arr1[i];
        newArr.push(testCase)
        for (let j = 0; j < arr2.length; j++) {
            if (testCase === arr2[j]) {
                newArr.pop()
            }
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        testCase = arr2[i];
        newArr.push(testCase)
        for (let j = 0; j < arr1.length; j++) {
            if (testCase === arr1[j]) {
                newArr.pop()
            }
        }
    }
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);