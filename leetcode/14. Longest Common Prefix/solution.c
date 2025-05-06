// Time: O(S)
// Space: O(L) ~> O(1)
// Note: 
//  Solution is horizontal scanning and is
//  safe as it doesn't change original input.
char* longestCommonPrefix(char** strs, int strsSize) {
    if (strsSize == 0) return "";

    char* prefix = strs[0];
    int prefix_len = strlen(prefix);

    for (int i = 1; i < strsSize; i++) {
        char* curr = strs[i];
        while (prefix_len > 0) {
            if (! strncmp(prefix, curr, prefix_len)) break; // compare strings
            prefix_len--;
        }
        if (prefix_len == 0) break;
    }
    // copy prefix to a new variable (including terminator)
    char* ret = malloc(prefix_len + 1);
    strncpy(ret, prefix, prefix_len);
    ret[prefix_len] = '\0';
    return ret;
}
