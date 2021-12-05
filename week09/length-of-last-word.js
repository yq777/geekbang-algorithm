/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const n = s.length;
  let ans = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === ' ' && ans === 0) continue;
    if (s[i] === ' ' && ans > 0) break;
    ans++;
  }
  return ans;
};
