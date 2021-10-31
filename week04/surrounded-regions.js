/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
    const dx=[-1,0,0,1], dy=[0,-1,1,0],  m= board.length, n=board[0].length;
    if(m===0) return [];
    const dfs = (board, nx, ny) => {
        // 终止条件：行数，列数不合法，或者这个值不为"O"
        if(nx< 0 || nx >=m || ny<0 || ny>=n || board[nx][ny] !== 'O') return;
        board[nx][ny] = "A";
        for(let i=0; i< 4; i++) {
            dfs(board, nx+dx[i], ny+dy[i]);
        }
    }
    // 检索每行的第一列和最后一列的"O"(边界值)，并将其更改为"A"
    for(let i=0; i< m; i++) {
        dfs(board, i, 0);
        dfs(board, i, n-1);
    }
    // 检索第一行和最后一行的"O"(边界值)，并将其更改为"A"
    for(let i=1; i< n-1; i++) {
        dfs(board, 0, i);
        dfs(board, m-1,i);
    }
    // 将所有的"A"改为"O"，将"O"改为"X"
    for(let i=0; i< m; i++) {
        for(let j=0; j< n; j++) {
            if(board[i][j] === "A") {
                board[i][j] = "O";
            } else if(board[i][j] === "O"){
                board[i][j] = "X";
            }
        }
    }
    return board
};