/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

//Simple Solution
/*
function reverseString(str) {
    let reversedStr = "";
    const arr = str.split('')
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedStr += arr[i]
    }
    return reversedStr;
}
*/

// Another Solution combining string methods

function reverseString(str) {
    // split turns the string in to an array, '' does it by character
    return str.split('')
        // reverses an array
        .reverse()
        // array method that joins elements in to a string
        .join('')
}


// -- Tests

function simpleTest(input, correctResult) {
    console.log(`desired output: ${correctResult}`, `actual output: ${reverseString(input)
        }`)
}

simpleTest('hello', 'olleh')
simpleTest('nathan', 'nahtan')
simpleTest('Howdy', 'ydwoH')
simpleTest('Greetings from Earth', 'htraE morf sgniteerG')

