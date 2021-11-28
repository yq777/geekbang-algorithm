/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  function find(x) {
    if (fa[x] === x) return x;
    return (fa[x] = find(fa[x]));
  }
  function unionSet(x, y) {
    x = find(x);
    y = find(y);
    if (x !== y) {
      fa[x] = y;
    }
  }
  const n = edges.length;
  const fa = new Array(n + 1).fill(0).map((item, index) => index);
  for (let i = 0; i < n; i++) {
    const node1 = edges[i][0],
      node2 = edges[i][1];
    if (find(node1) !== find(node2)) {
      unionSet(node1, node2);
    } else {
      return edges[i];
    }
  }
  return [];
};
