/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 *
 * https://leetcode.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (31.43%)
 * Total Accepted:    402.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * Implement strStr().
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 * 
 * Example 1:
 * 
 * 
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * 
 * Clarification:
 * 
 * What should we return when needle is an empty string? This is a great
 * question to ask during an interview.
 * 
 * For the purpose of this problem, we will return 0 when needle is an empty
 * string. This is consistent to C's strstr() and Java's indexOf().
 * 
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0
  if (needle === haystack) return 0
  let ans = -1
  let equal = false 
  for(let i=0; i<haystack.length-needle.length + 1; i++) {
    if (equal) break
    if (haystack[i] === needle[0]) {
      equal = true
      for(let j=0;j<needle.length; j++) {
        if (haystack[i+j] !== needle[j]) {
          equal = false
          break
        }
      }
      ans = equal ? i : -1
    }
  }
  return ans
};

strStr('hello', 'll')

