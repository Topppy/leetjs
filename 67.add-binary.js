/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const aArr = a.split('').reverse()
    const bArr = b.split('').reverse()
    const re = []
    const len = Math.max(a.length, b.length)
    let jin = 0;
    for(let i=0;(i<len || jin);i++){
      const sum = (+aArr[i] || 0) + (+bArr[i] || 0) + jin
      re.push((sum % 2))
      jin = ~~(sum/2)
    }
    return re.reverse().join('')
};

