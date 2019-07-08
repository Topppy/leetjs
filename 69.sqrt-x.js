/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x===0) return 0
    if (x===1) return 1
    let low = 0
    let high = x

    while(low < high) {
      let mid = (low + high) >> 1
      const squre = mid * mid
      if (squre === x) {
        return mid
      } else if (squre < x){
        low = mid
      } else {
        high = mid
      }
      // why?
      if (high - low === 1) return low
    }


};

