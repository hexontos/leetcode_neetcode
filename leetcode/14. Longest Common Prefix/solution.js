/**
 * @param {string[]} strs
 * @return {string}
 */
// Time: O(S)
// Space: O(L) ~> O(1)
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) {
        return "";
    }

    let prefix = strs[0];

    for (const s of strs) {
        while (!s.startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
};
