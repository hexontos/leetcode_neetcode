/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
// Time: O(n^2)
// Space: O(1)
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    int *ret = (int*)malloc(sizeof(int) * 2);
    *returnSize = 2;
    for (int i = 0; i < numsSize; i++) {
        for (int j = i+1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                ret[0] = i;
                ret[1] = j;
                return ret;
            }
        }
    }
    *returnSize = 0;
    return NULL;
}
