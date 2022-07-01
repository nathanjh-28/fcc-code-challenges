/**
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead

 */

function confirmEnding(str, targ) {
    return str.slice(str.length - targ.length) === targ

}

confirmEnding("Bastian", "n"); // true
confirmEnding("Congratulation", "on") // true

/**  Also can do this bc slice can take negative indexes
 * 
function confirmEnding(str, target) {
return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");
 


Another solution involves regex...

*/