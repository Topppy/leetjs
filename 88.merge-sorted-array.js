/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 重点是不能从左遍历，而要从右遍历
// nums1是返回数组
var merge = function(nums1, m, nums2, n) {
    // result的尾指针
    let i = nums1.length -1
    let j = m -1
    let k = n-1
    while(j>=0 && k>=0) {
      // 如果nums1的尾大
      if (nums1[j] > nums2[k]) {
        // 复制到result
        nums1[i] = nums1[j]
        j--
      } else {
        nums1[i] = nums2[k]
        k--
      }
      i--
    }
    // 如果nums1已经遍历完了，而nums2还剩，那么把nums2挨个复制到nums1
    if (k>=0) {
      while(k>=0) {
        nums1[k] = nums2[k]
        k--
      }
    }
};

