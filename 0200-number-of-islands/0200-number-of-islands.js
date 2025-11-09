/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

  let count = 0;

  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(r, c) {
    // Stop if out of bounds or on water
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") return;

    // Mark as visited (sink the island)
    grid[r][c] = "0";

    // Explore all four directions
    dfs(r + 1, c); // down
    dfs(r - 1, c); // up
    dfs(r, c + 1); // right
    dfs(r, c - 1); // left
  }

  // Traverse entire grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++;        // found a new island
        dfs(r, c);      // sink it (mark all connected land)
      }
    }
  }

  return count;
};