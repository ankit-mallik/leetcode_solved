/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function recursive(l, r){
        if(!l && !r) return true;

        if(!l || !r || l.val !== r.val) return false;
        
        return recursive(l.left, r.right) && recursive(l.right, r.left);
    }
    return recursive(root.left, root.right);
};