/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const map = {};

    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]) {
            for(let j = 0; j < needle.length; j++) {
                if(haystack[i + j] === needle[j]) {
                    i in map ? map[i] += needle[j] : map[i] = needle[j]
                }
            }
        }
    }

    console.log(map)
    let mapItems = Object.keys(map)
    if(mapItems.length === 0) {
        console.log('map length 0')
        return -1
    }else {
        for(let i = 0; i < mapItems.length; i++) {
            if(map[mapItems[i]] === needle) {
                return Number(mapItems[i])
            }
        }
        return -1
    }
};