// Boyer-Moore Voting Algorithm
// Time: O(n)
// Space: O(1)
int majorityElement(int* nums, int numsSize) {
    int candidate = nums[0];
    int count = 1;

    for (int i=1; i < numsSize; i++) {
        if (count == 0) {
            candidate = nums[i];
            count = 1;
        } else if (candidate == nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}
