/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let i = s.length - 1;
  let len = 0;
  while (i >= 0 && s[i] === " ") {
    i--;
  }
  while (i >= 0 && s[i] !== " ") {
    i--;
    len++;
  }
  return len
};
// 吐槽，题目很难完全理解啊，这个 ' ', 'a', 'a '调了半天
