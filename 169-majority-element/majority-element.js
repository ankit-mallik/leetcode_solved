/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ht = {};
    for (let i = 0; i < nums.length; i++){
        ht[nums[i]] = (ht[nums[i]] | 0) + 1;
        if (ht[nums[i]] > (nums.length / 2)){
            return nums[i];
        }
    }
};