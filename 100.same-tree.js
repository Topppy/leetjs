/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// same tree 就是每个结点的值相等，结构相同，跟左右子树的比较是一样的
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q===null) return true
    if (p === null && q!==null || p!==null && q===null) return false
    return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

