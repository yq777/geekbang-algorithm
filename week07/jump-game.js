/**
 * @param {number[]} nums
 * @return {boolean}
 * 贪心算法
 * 循环，判断x+nums[i]最远可达距离是否大于数组长度
 */
var canJump = function (nums) {
  let max = 0,
    length = nums.length;
  for (let i = 0; i < length; i++) {
    if (i <= max) {
      max = Math.max(max, i + nums[i]);
      if (max >= length - 1) {
        return true;
      }
    }
  }
  return false;
};
