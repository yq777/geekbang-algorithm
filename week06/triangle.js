/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let n = triangle.length,
    f = new Array(n).fill(0).map((item) => new Array(n));
  f[0][0] = triangle[0][0];
  for (let i = 1; i < triangle.length; i++) {
    f[i][0] = f[i - 1][0] + triangle[i][0];
    for (let j = 1; j < i; j++) {
      f[i][j] = Math.min(f[i - 1][j - 1], f[i - 1][j]) + triangle[i][j];
    }
    f[i][i] = f[i - 1][i - 1] + triangle[i][i];
  }
  let ans = f[n - 1][0];
  for (let i = 1; i < n; i++) {
    ans = Math.min(ans, f[n - 1][i]);
  }
  return ans;
};
