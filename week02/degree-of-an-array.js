/**
 * @param {number[]} nums
 * @return {number}
 * 1、通过hash表记录每个值出现次数和第一次以及最后一次出现的位置
 * 2、遍历hash表得到次数最多的值，通过最后一次出现位置和第一次出现位置计算最小长度
 * 时间复杂度: O(n)
 */
var findShortestSubArray = function (nums) {
  const hash = {};
  let max = 0;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]][0] += 1;
      hash[nums[i]][2] = i;
    } else {
      hash[nums[i]] = [1, i, i];
    }
  }
  for (let key in hash) {
    const [count, first, last] = hash[key];
    let length = last - first + 1;
    if (count > max) {
      max = count;
      ans = length;
    } else if (count === max) {
      if (ans > length) {
        ans = length;
      }
    }
  }
  return ans;
};
