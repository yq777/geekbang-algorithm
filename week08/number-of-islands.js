/**
 * @param {character[][]} grid
 * @return {number}
 */
class UnionFind {
  constructor() {
    this.fa = [];
    this.count = 0;
  }
  makeSet(x) {
    this.fa[x] = x;
    this.count++;
  }
  find(x) {
    if (this.fa[x] === x) return x;
    return (this.fa[x] = this.find(this.fa[x]));
  }
  union(x, y) {
    x = this.find(x);
    y = this.find(y);
    if (x !== y) {
      this.fa[x] = y;
      this.count--;
    }
  }
  getCount() {
    return this.count;
  }
}

var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const uf = new UnionFind();
  const dx = [-1, 0, 0, 1];
  const dy = [0, -1, 1, 0];

  const nums = (i, j) => {
    return i * n + j;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == '1') uf.makeSet(nums(i, j));
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < 4; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];
        if (nx < 0 || ny < 0 || nx >= m || ny >= n) {
          continue;
        }
        if (grid[i][j] === '1') {
          if (grid[nx][ny] === '1') {
            uf.union(nums(i, j), nums(nx, ny));
          }
        }
      }
    }
  }

  return uf.getCount();
};
