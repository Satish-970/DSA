export const graph = {
  id: "graph",
  title: "Graphs",
  icon: "🕸️",
  description: "BFS, DFS, shortest paths, MST, and topological sort. The most versatile data structure in competitive programming.",
  theory: [
    "Graph Representation", "BFS", "DFS", "DSU (Union-Find)",
    "MST", "Topological Sort", "Dijkstra", "Bellman-Ford", "Floyd-Warshall"
  ],
  algorithms: [
    { name: "Dijkstra", time: "O((V+E) log V)", space: "O(V)" },
    { name: "Bellman-Ford", time: "O(VE)", space: "O(V)" },
    { name: "Floyd-Warshall", time: "O(V³)", space: "O(V²)" },
    { name: "Prim's MST", time: "O(E log V)", space: "O(V)" },
    { name: "Kruskal's MST", time: "O(E log E)", space: "O(V)" },
    { name: "Topological Sort", time: "O(V+E)", space: "O(V)" }
  ],
  problems: [
    { title: "Find if Path Exists in Graph", difficulty: "Easy", leetcode: "https://leetcode.com/problems/find-if-path-exists-in-graph/" },
    { title: "Number of Islands", difficulty: "Medium", leetcode: "https://leetcode.com/problems/number-of-islands/" },
    { title: "Clone Graph", difficulty: "Medium", leetcode: "https://leetcode.com/problems/clone-graph/" },
    { title: "Course Schedule", difficulty: "Medium", leetcode: "https://leetcode.com/problems/course-schedule/" },
    { title: "Word Ladder", difficulty: "Hard", leetcode: "https://leetcode.com/problems/word-ladder/" },
    { title: "Alien Dictionary", difficulty: "Hard", leetcode: "https://leetcode.com/problems/alien-dictionary/" },
    { title: "Critical Connections in a Network", difficulty: "Hard", leetcode: "https://leetcode.com/problems/critical-connections-in-a-network/" }
  ]
};
