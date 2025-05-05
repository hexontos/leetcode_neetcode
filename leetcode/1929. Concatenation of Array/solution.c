/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
// Time: ~O(n)
// Space: O(2n) ~> O(n)
int* getConcatenation(int* nums, int numsSize, int* returnSize)
{
    int *ret = malloc(sizeof(int) * (numsSize * 2));
    for (int i = 0; i < numsSize; i++) {
        ret[i] = nums[i];
        ret[numsSize + i] = nums[i];
    }
    *returnSize = numsSize*2;
    return ret;
}
