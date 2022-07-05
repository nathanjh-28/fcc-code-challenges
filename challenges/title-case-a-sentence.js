/**
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
 */

function titleCase(str) {
    let newArr = str.split(' ');
    for (let i = 0; i < newArr.length; i++) {
        let newStr = newArr[i].split('')
        newStr[0] = newStr[0].toUpperCase()
        if (newStr.length > 1) {
            for (let j = 1; j < newStr.length; j++) {
                newStr[j] = newStr[j].toLowerCase()
            }
        }
        newArr[i] = newStr.join('')
    }
    return newArr.join(' ')
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"))