/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Time: O(n)
// Space: O(n)
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};
