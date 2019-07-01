/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let jin = 1
  for (let i = 0; i < digits.length; i++) {
    let j = digits.length - 1 - i
    if (digits[j] < 9) {
      ++digits[j]
      return digits
    } else {
      digits[j] = 0
    }
  }
  digits.unshift(jin)
  return digits
};

// 如果直接转换成数字+1，再转换成数组的话，会遇到超出最大数的问题。
