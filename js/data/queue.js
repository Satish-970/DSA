export const queue = {
  id: "queue",
  title: "Queue",
  icon: "🚶",
  description: "FIFO data structure. Master BFS queue pattern, circular queue, and deque for sliding window problems.",
  theory: [
    "Queue Basics", "Circular Queue", "Deque", "BFS Queue Pattern", "Priority Queue Intro"
  ],
  algorithms: [
    { name: "BFS Queue Pattern", time: "O(V+E)", space: "O(V)" }
  ],
  problems: [
    { title: "Implement Queue using Stacks", difficulty: "Easy", leetcode: "https://leetcode.com/problems/implement-queue-using-stacks/" },
    { title: "Design Circular Queue", difficulty: "Medium", leetcode: "https://leetcode.com/problems/design-circular-queue/" },
    { title: "Sliding Window Maximum", difficulty: "Hard", leetcode: "https://leetcode.com/problems/sliding-window-maximum/" }
  ]
};
