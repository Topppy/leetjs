/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// cs(n) = cs(n-1) + cs(n-2)
// cs(1) = cs(2) = 1
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const re = [0, 1, 2]
    const calc = (x) => {
        if (x <=2) return re[x]
        if (typeof re[x] === 'undefined') {
            re[x] = calc(x-1) +calc(x-2)
        }
        return re[x]
    }
    return calc(n)

};

climbStairs(3)

