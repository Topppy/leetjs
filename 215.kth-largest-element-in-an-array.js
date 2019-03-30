/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (46.44%)
 * Total Accepted:    342.5K
 * Total Submissions: 734.6K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * Find the kth largest element in an unsorted array. Note that it is the kth
 * largest element in the sorted order, not the kth distinct element.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,1,5,6,4] and k = 2
 * Output: 5
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,2,3,1,2,4,5,5,6] and k = 4
 * Output: 4
 * 
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ array's length.
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 思路一： 复杂度O(n*k)
// 我首先想到的还是维持一个k大小的升序数组l， 然后遍历nums，比l[0]大就unshift进数组，保持数组升序，然后丢弃l[0],最后l[0]就是答案
// 这个如何插入和保持升序，unshift进数组，不断跟后一位比较，直到找到比自己大的然后插入在其前面。
var findKthLargest = function(nums, k) {
    let tmp = [nums.shift()]
    while(nums.length){
      const cur = nums.shift()
      // 如果大于已有k那么push
      if (cur>tmp[tmp.length-1]) {
        tmp.push(cur)
      } else if (cur > tmp[0]) {
        // 如果小大于队首
        tmp.unshift(cur);
        for(let i=1;i<tmp.length;i++){
          if (cur>tmp[i]) {
            tmp[i-1] = tmp[i]
            tmp[i] = cur
          }
        }
      } else if (tmp.length < k) {
        // 如果队伍不满
        tmp.unshift(cur)
      }
      // 如果队伍超员
      if (tmp.length > k) {
        tmp.shift()
      }
    }
    //返回队首
    return tmp[0]
};

// 思路2： 复杂度O(logn)
// 二分查找：
var findKthLargest = function(nums, k) {
};

//test case
findKthLargest([3,2,3,1,2,4,5,5,6], 4)
