export const heap = {
  id: "heap",
  title: "Heap / Priority Queue",
  icon: "🏔️",
  description: "Min/Max heap for top-K problems, scheduling, and median finding. Essential for greedy and graph algorithms.",
  theory: [
    "Min Heap", "Max Heap", "Priority Queue",
    "Heapify", "Heap Sort", "K-way Merge"
  ],
  algorithms: [
    { name: "Heapify", time: "O(n)", space: "O(1)" },
    { name: "Heap Sort", time: "O(n log n)", space: "O(1)" }
  ],
  problems: [
    { title: "Last Stone Weight", difficulty: "Easy", leetcode: "https://leetcode.com/problems/last-stone-weight/" },
    { title: "Kth Largest Element in an Array", difficulty: "Medium", leetcode: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
    { title: "Top K Frequent Elements", difficulty: "Medium", leetcode: "https://leetcode.com/problems/top-k-frequent-elements/" },
    { title: "Find Median from Data Stream", difficulty: "Hard", leetcode: "https://leetcode.com/problems/find-median-from-data-stream/" }
  ]
};
