/**
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
 * 
 */

function largestOfFour(arr) {

    // Fancy, using Map (alternate would be to use .reduce inside map)
    const newArr = arr.map(item => {
        return Math.max(...item)
    })
    console.log(newArr)
    // return newArr

    // Simple with nested loop
    let temp = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            temp = Math.max(temp, arr[i][j])
        }
        arr[i] = temp;
        temp = -Infinity
    }
    // return arr;

    // Recursive

    function largestOfFour2(arr, finalArr = []) {
        return !arr.length ? finalArr
            : largestOfFour2(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
    }



}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));