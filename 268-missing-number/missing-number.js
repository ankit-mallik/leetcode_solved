/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let gSum = (nums.length * (nums.length + 1))/2;
    let nSum = nums.reduce((acum, el) => acum + el, 0)

    return gSum - nSum;
};