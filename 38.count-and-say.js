/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    const re = ['1']
    if (n===1) return re[n-1]
    const count = (str) => {
      if (str.length === 1) return '11'
      let temp =''
      let j = 0
      let count = 0
      while (j < str.length) {
        if (str[j] === str[j-1]) {
          count++
        } else {
          if (str[j-1]) temp = `${temp}${count}${str[j-1]}`
          count = 1
        }
        j++
      }
      if (count>0) {
        temp = `${temp}${count}${str[str.length-1]}`
      }
      return temp
    }
    for (i = 2; i <= n; i++) {
      re[i-1] = count(re[i-2])
    }
    return re[n-1]
};

countAndSay(4)

