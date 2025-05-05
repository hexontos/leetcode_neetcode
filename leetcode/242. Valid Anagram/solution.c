#include <stdbool.h>
#include <string.h>

// Time: O(3n + 26) ~> O(n)
// Space: O(26) ~> O(1)
bool isAnagram(char* s, char* t) {
    int len = strlen(s);
    if (len != strlen(t)) return false;

    int count[26] = {};

    for (int i = 0; i < len; i++) {
        count[s[i] - 'a']++;
        count[t[i] - 'a']--;
    }
    for (int i = 0; i < 26; i++)
        if (count[i] != 0) return false;

    return true;
}
