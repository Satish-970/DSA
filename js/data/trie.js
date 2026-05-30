export const trie = {
  id: "trie",
  title: "Trie",
  icon: "🔠",
  description: "Prefix tree for fast string search, autocomplete, and word dictionary problems.",
  theory: [
    "Prefix Tree", "Insert", "Search", "StartsWith",
    "Compressed Trie", "Suffix Trie"
  ],
  algorithms: [
    { name: "Trie Insert", time: "O(m)", space: "O(m)" },
    { name: "Trie Search", time: "O(m)", space: "O(1)" }
  ],
  problems: [
    { title: "Implement Trie (Prefix Tree)", difficulty: "Easy", leetcode: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
    { title: "Design Add and Search Words Data Structure", difficulty: "Medium", leetcode: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
    { title: "Word Search II", difficulty: "Hard", leetcode: "https://leetcode.com/problems/word-search-ii/" }
  ]
};
