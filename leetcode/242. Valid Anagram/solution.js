/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);

    const ascii_value_of_a = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - ascii_value_of_a]++;
        count[t.charCodeAt(i) - ascii_value_of_a]--;
    }

    return count.every(c => c === 0);
};
