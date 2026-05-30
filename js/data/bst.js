export const bst = {
  id: "bst",
  title: "BST",
  icon: "🌲",
  description: "Binary Search Tree properties enable O(log n) search, insert, and delete. Master validation, kth element, and range queries.",
  theory: [
    "BST Properties", "Insert", "Delete", "Search",
    "Inorder = Sorted", "Balanced BST", "AVL Tree Intro"
  ],
  algorithms: [
    { name: "BST Insert", time: "O(log n)", space: "O(h)" },
    { name: "BST Delete", time: "O(log n)", space: "O(h)" },
    { name: "BST Search", time: "O(log n)", space: "O(h)" }
  ],
  problems: [
    { title: "Search in a Binary Search Tree", difficulty: "Easy", leetcode: "https://leetcode.com/problems/search-in-a-binary-search-tree/" },
    { title: "Validate Binary Search Tree", difficulty: "Medium", leetcode: "https://leetcode.com/problems/validate-binary-search-tree/" },
    { title: "Kth Smallest Element in a BST", difficulty: "Medium", leetcode: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
    { title: "Recover Binary Search Tree", difficulty: "Hard", leetcode: "https://leetcode.com/problems/recover-binary-search-tree/" }
  ]
};
