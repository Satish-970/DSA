export const advanced = {
  id: "advanced",
  title: "Advanced Algorithms",
  icon: "🚀",
  description: "Segment trees, Fenwick trees, sparse tables, suffix arrays, and advanced string algorithms for competitive programming.",
  theory: [
    "Segment Tree", "Fenwick Tree (BIT)", "Sparse Table",
    "Suffix Array", "KMP", "Rabin Karp", "Z Algorithm", "Manacher"
  ],
  algorithms: [
    { name: "Segment Tree Build", time: "O(n)", space: "O(n)" },
    { name: "Segment Tree Query", time: "O(log n)", space: "O(1)" },
    { name: "Fenwick Tree Update", time: "O(log n)", space: "O(n)" },
    { name: "Sparse Table Query", time: "O(1)", space: "O(n log n)" }
  ],
  problems: [
    { title: "Range Sum Query - Immutable", difficulty: "Easy", leetcode: "https://leetcode.com/problems/range-sum-query-immutable/" },
    { title: "Implement Trie (Prefix Tree)", difficulty: "Medium", leetcode: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
    { title: "Suffix Array Construction", difficulty: "Hard", leetcode: "https://leetcode.com/problems/suffix-array/" }
  ]
};
