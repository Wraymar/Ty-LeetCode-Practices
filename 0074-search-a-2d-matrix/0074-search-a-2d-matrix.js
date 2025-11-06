/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++) {
        let low = 0,
            high = matrix[i].length;
            if(matrix[i][matrix[i].length - 1] < target) {
                continue;
            }
            while(low <= high) {
                let mid = Math.floor((low + high) / 2)
                if(matrix[i][mid] === target) return true
                if(matrix[i][mid] < target) {
                    low = mid + 1
                }else if(matrix[i][mid] > target) {
                    high = mid - 1
                }
            }
            if(matrix[i][low] === target) {
                return true
            }
        }
        return false
};