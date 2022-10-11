/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  
  function palindrome(s,l,r) {
    while(l>=0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    // 由于slice是左闭右开，所以左侧有效位置应为l+1
    // while终止的时候l是在有效位的前一位，r在有效位置的后一位
    return s.slice(l+1, r);
  }
  let res = "";

  for(let i=0; i<s.length; i++) {
    const s1 = palindrome(s, i,i)
    const s2 = palindrome(s, i, i + 1);
    console.log({res, s1, s2})
    res = s1.length > res.length? s1 : res
    res = s2.length > res.length? s2 : res

  }
  return res

};
// @lc code=end

