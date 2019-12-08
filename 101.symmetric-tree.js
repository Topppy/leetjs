/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {   
    function isMir(a,b) {
        if (a === undefined && b === undefined ) return true
        // a or b is null
        if (a === null && b === null) return true
        if (a === null || b === null ) return false
        // a and b both has val
        return (a.val === b.val) && isMir(a.left, b.right) && isMir(a.right, b.left)
    }
    return isMir(root,root)
    
};
// @lc code=end

// 对称二叉树的左右子树互为镜像
// 互为镜像的ab两树满足：1.val相等；2 a左右子树与b右左子树镜像
