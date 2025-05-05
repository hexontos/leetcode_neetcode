/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Time: O(n)
// Space: O(n)
var getConcatenation = function(nums) {
    return nums.concat(nums);
};// Note: concat is O(n + m), here it double self, therefore O(2n) ~> O(n)
