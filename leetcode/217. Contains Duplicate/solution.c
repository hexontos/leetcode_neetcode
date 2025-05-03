#include <stdlib.h>
#include <stdbool.h>
#include <setjmp.h>


// Time: O(n log n)
// Space: O(1)
jmp_buf jmp;
bool containsDuplicate(int* nums, int numsSize) {
    int cmp(const void *a, const void*b) {
        int ret = *(int *)a - *(int *)b;
        if (ret == 0) longjmp(jmp, true);
        return ret;
    }
    if (setjmp(jmp)) return true;
    qsort(nums, numsSize, sizeof(nums[0]), cmp);
    return false;
}
// Note: C lib's qsort() expects comparator as pure function, hence global variable
// wouldn't work, so alternatively implement own qsort or use <setjmp.h>







// Solution with sorting
// Time: O(n log n + n)
// Space: O(1)
bool containsDuplicate_prev(int* nums, int numsSize) {
    int cmp(const void *a, const void *b) {
        return (*(int*)a - *(int*)b);
    }
    qsort(nums, numsSize, sizeof(nums[0]), cmp);
    for (int i = 0; i < numsSize - 1; i++)
        if (nums[i] == nums[i+1]) return true;
    return false;
}
// Note: alternative would be solution with Hash Table T: O(n) S: O(n)
