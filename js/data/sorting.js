export const sorting = {
  id: "sorting",
  title: "Sorting",
  icon: "🔢",
  description: "From O(n²) to O(n log n). Master merge sort, quick sort, and when to use each sorting algorithm.",
  theory: [
    "Bubble Sort", "Selection Sort", "Insertion Sort",
    "Merge Sort", "Quick Sort", "Heap Sort", "Counting Sort", "Radix Sort"
  ],
  algorithms: [
    { name: "Merge Sort", time: "O(n log n)", space: "O(n)" },
    { name: "Quick Sort", time: "O(n log n)", space: "O(log n)" },
    { name: "Heap Sort", time: "O(n log n)", space: "O(1)" }
  ],
  problems: [
    { title: "Sort Colors", difficulty: "Easy", leetcode: "https://leetcode.com/problems/sort-colors/" },
    { title: "Merge Intervals", difficulty: "Medium", leetcode: "https://leetcode.com/problems/merge-intervals/" },
    { title: "Count Inversions", difficulty: "Hard", leetcode: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" }
  ]
};
