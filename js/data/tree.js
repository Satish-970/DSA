export const tree = {
  id: "tree",
  title: "Binary Tree",
  icon: "🌳",
  description: "DFS and BFS traversals, path problems, and tree construction. Foundation for BST, Trie, and segment trees.",
  theory: [
    "DFS", "BFS", "Preorder", "Inorder", "Postorder",
    "Level Order", "Height & Depth", "Diameter", "LCA"
  ],
  algorithms: [
    { name: "Preorder DFS", time: "O(n)", space: "O(h)" },
    { name: "Inorder DFS", time: "O(n)", space: "O(h)" },
    { name: "Level Order BFS", time: "O(n)", space: "O(w)" }
  ],
  problems: [
    { title: "Maximum Depth of Binary Tree", difficulty: "Easy", leetcode: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
    { title: "Binary Tree Level Order Traversal", difficulty: "Medium", leetcode: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
    { title: "Lowest Common Ancestor of a Binary Tree", difficulty: "Medium", leetcode: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
    { title: "Binary Tree Maximum Path Sum", difficulty: "Hard", leetcode: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" }
  ]
};
