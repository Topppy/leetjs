/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (25.74%)
 * Total Accepted:    402K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * 
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * Example 2:
 * 
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * 思路：
 * 要求m+n复杂度肯定不能嵌套for循环
 * 需要将两个数组重新排序
 * 然后取中值
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const arr = []
    while(nums1.length || nums2.length){
      const temp1 = nums1.length ? nums1[0] : Infinity
      const temp2 = nums2.length ? nums2[0] : Infinity
      if (temp1 < temp2) {
        arr.push(temp1)
        nums1.shift()
      } else {
        arr.push(temp2)
        nums2.shift()
      }
    }
    if (arr.length % 2) {
      return arr[(arr.length-1)/2]
    } else {
      return (arr[arr.length/2-1] +  arr[(arr.length/2)])/2
    }
};

// findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],[0,6])

