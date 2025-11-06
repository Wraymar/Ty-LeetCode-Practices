/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0,
        high = nums.length - 1

    while(low <= high) {
    let middle = Math.floor((low + high) / 2);
    if(nums[middle] === target) return middle
        if(target > nums[middle]) {
            low = middle + 1
        }else if (target < nums[middle]) {
            high = middle - 1
        }
    }
    if(nums[low] === target) {
        return low
    }else {
        return -1
    }
};