export const binarysearch = {
  id: "binarysearch",
  title: "Binary Search",
  icon: "🔍",
  description: "Eliminate half the search space each step. Master binary search on answer, rotated arrays, and boundary conditions.",
  theory: [
    "Binary Search", "Lower Bound", "Upper Bound",
    "Binary Search on Answer", "Rotated Array Search", "Peak Finding"
  ],
  algorithms: [
    { name: "Binary Search", time: "O(log n)", space: "O(1)" },
    { name: "Binary Search on Answer", time: "O(n log n)", space: "O(1)" }
  ],
  problems: [
    { title: "Binary Search", difficulty: "Easy", leetcode: "https://leetcode.com/problems/binary-search/" },
    { title: "Search Insert Position", difficulty: "Easy", leetcode: "https://leetcode.com/problems/search-insert-position/" },
    { title: "Search in Rotated Sorted Array", difficulty: "Medium", leetcode: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
    { title: "Find Peak Element", difficulty: "Medium", leetcode: "https://leetcode.com/problems/find-peak-element/" },
    { title: "Median of Two Sorted Arrays", difficulty: "Hard", leetcode: "https://leetcode.com/problems/median-of-two-sorted-arrays/" }
  ]
};
