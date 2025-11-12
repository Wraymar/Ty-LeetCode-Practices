/**
 * @param {number[]} prices
 * @return {number}
 */

 /*
    set the lowest to be the first number in the array
    if the current price is lower than our lowest then we reassign lowest
    else...

    we subtract the current from the lowest and store its value
    if we encounter a higher profit then we reassign the max to be the difference

 */
var maxProfit = function(prices) {
    let lowest = prices[0],
        max = 0;
    
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < lowest) {
            lowest = prices[i]
        }else if(prices[i] - lowest > max) {
            max = prices[i] - lowest
        }
    }
    return max
};
    //BAD COMPLEXITY
    // let max = 0;
    // for(let i = 0; i < prices.length - 1; i++) {
    //     for(let j = i + 1; j < prices.length; j++) {
    //         if(prices[j] - prices[i] > max) {
    //             max = prices[j] - prices[i]
    //         }
    //     }
    // }
    // return max 