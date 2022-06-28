/*
Return the length of the longest word in the provided sentence.

Your response should be a number.

https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-find-the-longest-word-in-a-string/16015
*/

// Simple

function findLongestWordLength(str) {
    let length = 0;
    const arr = str.split(" ")

    arr.forEach(word => {
        if (word.length > length) {
            length = word.length
        }
    })

    return length;
}

// with Math.max

function findLongestWordLength2(str) {
    let length = 0;
    const arr = str.split(" ")
    arr.forEach(word => {
        // Math.max makes it a little more concise
        length = Math.max(length, word.length)
    })
    return length;
}

// with reduce

function findLongestWordLength3(s) {
    return s.split(' ')
        .reduce((longest, word) => {
            return Math.max(longest, word.length)
        }, 0) // 0 gives initial value to longest
}

// with map

// use map to create another array where the items are the values of lengths of the words then use Math.max on that array.

// spread operator is needed to pass the items in to the Math.max function

function findLongestWordLength4(str) {
    return Math.max(...str.split(' ').map(word => word.length))
}

// with recursion

function findLongestWordLength5(str) {
    // initialize our array from the string
    const words = str.split(' ');

    // when we have one item in the array then return that item's length
    if (words.length === 1) return words[0].length;

    return Math.max(
        //the first word's length
        words[0].length,
        // recursively calling the function to get each of the items of an array by removing the first item and returning the new first item.  join turns our array back in to a string bc the beginning of the function takes a string and converts it in to an array
        findLongestWordLength5(words.slice(1).join(" "))
    )



}