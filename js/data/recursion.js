export const recursion = {
  id: "recursion",
  title: "Recursion",
  icon: "🔁",
  description: "Master recursion, the backbone of DFS, backtracking, and divide & conquer. Understand base cases, recursive trees, and tail recursion.",
  theory: [
    "Base Case", "Recursive Tree", "Tail Recursion", "Backtracking Intro",
    "Call Stack", "Memoization Intro", "Divide & Conquer"
  ],
  algorithms: [
    { name: "Recursive DFS", time: "O(n)", space: "O(h)" },
    { name: "Backtracking Template", time: "O(2^n)", space: "O(n)" }
  ],
  problems: [
    { title: "Fibonacci Number", difficulty: "Easy", leetcode: "https://leetcode.com/problems/fibonacci-number/" },
    { title: "Climbing Stairs", difficulty: "Easy", leetcode: "https://leetcode.com/problems/climbing-stairs/" },
    { title: "Generate Parentheses", difficulty: "Medium", leetcode: "https://leetcode.com/problems/generate-parentheses/" },
    { title: "Subsets", difficulty: "Medium", leetcode: "https://leetcode.com/problems/subsets/" },
    { title: "Permutations", difficulty: "Medium", leetcode: "https://leetcode.com/problems/permutations/" },
    { title: "N-Queens", difficulty: "Hard", leetcode: "https://leetcode.com/problems/n-queens/" },
    { title: "Sudoku Solver", difficulty: "Hard", leetcode: "https://leetcode.com/problems/sudoku-solver/" }
  ]
};
