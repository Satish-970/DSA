export const linkedlist = {
  id: "linkedlist",
  title: "Linked List",
  icon: "🔗",
  description: "Singly, doubly, and circular linked lists. Master fast-slow pointer, reversal, and merge patterns.",
  theory: [
    "Singly Linked List", "Doubly Linked List", "Circular Linked List",
    "Fast Slow Pointer", "Reversal", "Merge", "Dummy Node Trick"
  ],
  algorithms: [
    { name: "Floyd Cycle Detection", time: "O(n)", space: "O(1)" },
    { name: "Reverse Linked List", time: "O(n)", space: "O(1)" }
  ],
  problems: [
    { title: "Reverse Linked List", difficulty: "Easy", leetcode: "https://leetcode.com/problems/reverse-linked-list/" },
    { title: "Middle of the Linked List", difficulty: "Easy", leetcode: "https://leetcode.com/problems/middle-of-the-linked-list/" },
    { title: "Linked List Cycle", difficulty: "Easy", leetcode: "https://leetcode.com/problems/linked-list-cycle/" },
    { title: "Remove Nth Node From End of List", difficulty: "Medium", leetcode: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
    { title: "Reorder List", difficulty: "Medium", leetcode: "https://leetcode.com/problems/reorder-list/" },
    { title: "Add Two Numbers", difficulty: "Medium", leetcode: "https://leetcode.com/problems/add-two-numbers/" },
    { title: "Reverse Nodes in k-Group", difficulty: "Hard", leetcode: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
    { title: "Merge K Sorted Lists", difficulty: "Hard", leetcode: "https://leetcode.com/problems/merge-k-sorted-lists/" }
  ]
};
