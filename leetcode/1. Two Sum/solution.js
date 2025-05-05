/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time: O(n)
// Space: O(n)
var twoSum = function(nums, target) {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (diff in hashMap) {
            return [hashMap[diff], i];
        }
        hashMap[nums[i]] = i;
    }
};
