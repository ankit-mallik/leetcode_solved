/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim().split(" ");
    let last = s[s.length - 1];
    return last.length;
};