export const stack = {
  id: "stack",
  title: "Stack",
  icon: "📚",
  description: "LIFO data structure. Master monotonic stack for next greater element, histogram, and expression evaluation.",
  theory: [
    "Stack Basics", "Monotonic Stack", "Stack with Min",
    "Expression Evaluation", "Balanced Parentheses"
  ],
  algorithms: [
    { name: "Next Greater Element", time: "O(n)", space: "O(n)" },
    { name: "Monotonic Stack", time: "O(n)", space: "O(n)" }
  ],
  problems: [
    { title: "Valid Parentheses", difficulty: "Easy", leetcode: "https://leetcode.com/problems/valid-parentheses/" },
    { title: "Min Stack", difficulty: "Easy", leetcode: "https://leetcode.com/problems/min-stack/" },
    { title: "Daily Temperatures", difficulty: "Medium", leetcode: "https://leetcode.com/problems/daily-temperatures/" },
    { title: "Asteroid Collision", difficulty: "Medium", leetcode: "https://leetcode.com/problems/asteroid-collision/" },
    { title: "Largest Rectangle in Histogram", difficulty: "Hard", leetcode: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
    { title: "Basic Calculator", difficulty: "Hard", leetcode: "https://leetcode.com/problems/basic-calculator/" }
  ]
};
