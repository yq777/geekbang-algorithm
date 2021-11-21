/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let n = nums.length,
    f = new Array(n).fill(-Infinity);
  f[0] = nums[0];
  for (let i = 1; i < n; i++) {
    if (i <= f[i - 1]) {
      f[i] = Math.max(f[i - 1], i + nums[i]);
    }
  }
  return f[n - 1] >= nums[n - 1];
};
