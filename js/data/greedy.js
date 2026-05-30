export const greedy = {
  id: "greedy",
  title: "Greedy",
  icon: "💰",
  description: "Make the locally optimal choice at each step. Master activity selection, interval scheduling, and greedy proofs.",
  theory: [
    "Greedy Choice Property", "Optimal Substructure",
    "Activity Selection", "Interval Scheduling", "Huffman Coding"
  ],
  algorithms: [
    { name: "Activity Selection", time: "O(n log n)", space: "O(1)" },
    { name: "Huffman Coding", time: "O(n log n)", space: "O(n)" }
  ],
  problems: [
    { title: "Assign Cookies", difficulty: "Easy", leetcode: "https://leetcode.com/problems/assign-cookies/" },
    { title: "Jump Game", difficulty: "Medium", leetcode: "https://leetcode.com/problems/jump-game/" },
    { title: "Task Scheduler", difficulty: "Medium", leetcode: "https://leetcode.com/problems/task-scheduler/" },
    { title: "Candy", difficulty: "Hard", leetcode: "https://leetcode.com/problems/candy/" }
  ]
};
