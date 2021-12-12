/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function (positions) {
  const qans = [];
  for (let i = 0; i < positions.length; i++) {
    const left = positions[i][0];
    const size = positions[i][1];
    const right = left + size;
    qans[i] = (qans[i] || 0) + size;
    for (let j = i + 1; j < positions.length; j++) {
      const left2 = positions[j][0] || 0;
      const size2 = positions[j][1] || 0;
      const right2 = left2 + size2;
      if (left2 < right && left < right2) {
        qans[j] = Math.max(qans[j] || 0, qans[i]);
      }
    }
  }

  const ans = [];
  let cur = -1;
  for (let x of qans) {
    cur = Math.max(cur, x);
    ans.push(cur);
  }
  return ans;
};
