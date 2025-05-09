/**
 * @param {number[]} nums
 * @return {number}
 */
// Boyer-Moore Voting Algorithm
// Time: O(n)
// Space: O(1)
var majorityElement = function(nums) {
    let candidate = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } else if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate
};
