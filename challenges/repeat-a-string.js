/**
 * Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
 * 
 */

function repeatStringNumTimes(str, num) {
    if (num <= 0) return ''
    if (num === 1) return str
    let arr = []
    for (let i = num; i > 0; i--) {
        arr.push(str)
    }
    return arr.join('');
}

function repeatStringNumTimes(str, num) {
    let newString = '';
    for (let i = num; i > 0; i--) {
        newString += str
    }
    return newString;
}

// recursive solution
function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

repeatStringNumTimes("abc", 3);



repeatStringNumTimes("abc", 3); //  'abcabcabc'