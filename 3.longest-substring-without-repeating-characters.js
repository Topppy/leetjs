/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.08%)
 * Total Accepted:    841.8K
 * Total Submissions: 3M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 */

/**
 * 思路
 * substring起点指针
 * 循环
 *  如果重复
 *    (重复条件，重复点在起点右侧)
 *    起点=重复点+1
 *  如果不重复
 *    保存最大长度
 *  保存点index
 *  右边++
 * 返回最大长度
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let start = 0;
  const map = {};
  const arr = s.split('');
  for(let i=0;i<= arr.length-1; i++) {
    // 重复
    if (typeof map[arr[i]] !== 'undefined' &&  map[arr[i]] >= start) {
      start = map[arr[i]]+1
    } else {
      max = Math.max(max, i-start+1)
    }
    map[arr[i]] = i
  }
  return max
};


