/**
 * @param {number} n
 * @return {number}
 * 
 */
var numSquares = function (n) {
  const f = new Array(n + 1).fill(Infinity);
  f[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      f[i] = Math.min(f[i], f[i - j * j]);
    }
    f[i] = f[i] + 1;
  }
  return f[n];
};
