export const backtracking = {
  id: "backtracking",
  title: "Backtracking",
  icon: "↩️",
  description: "Explore all possibilities by making choices and undoing them. Essential for combinatorics, constraint satisfaction, and puzzles.",
  theory: [
    "Choice", "Constraint", "Undo (Backtrack)",
    "Pruning", "State Space Tree", "Backtracking Template"
  ],
  algorithms: [
    { name: "Backtracking Template", time: "O(2^n)", space: "O(n)" }
  ],
  problems: [
    { title: "Letter Combinations of a Phone Number", difficulty: "Easy", leetcode: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
    { title: "Combination Sum", difficulty: "Medium", leetcode: "https://leetcode.com/problems/combination-sum/" },
    { title: "Permutations", difficulty: "Medium", leetcode: "https://leetcode.com/problems/permutations/" },
    { title: "N-Queens", difficulty: "Hard", leetcode: "https://leetcode.com/problems/n-queens/" },
    { title: "Sudoku Solver", difficulty: "Hard", leetcode: "https://leetcode.com/problems/sudoku-solver/" }
  ]
};
