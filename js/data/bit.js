export const bit = {
  id: "bit",
  title: "Bit Manipulation",
  icon: "⚡",
  description: "Bit tricks for fast computation. Master AND, OR, XOR, shifts, and bitmask DP.",
  theory: [
    "AND", "OR", "XOR", "Left Shift", "Right Shift",
    "Bit Masking", "Two's Complement", "Bit Counting"
  ],
  algorithms: [
    { name: "XOR Tricks", time: "O(1)", space: "O(1)" },
    { name: "Bitmasking DP", time: "O(n·2^n)", space: "O(2^n)" }
  ],
  problems: [
    { title: "Single Number", difficulty: "Easy", leetcode: "https://leetcode.com/problems/single-number/" },
    { title: "Number of 1 Bits", difficulty: "Easy", leetcode: "https://leetcode.com/problems/number-of-1-bits/" },
    { title: "Counting Bits", difficulty: "Easy", leetcode: "https://leetcode.com/problems/counting-bits/" },
    { title: "Missing Number", difficulty: "Easy", leetcode: "https://leetcode.com/problems/missing-number/" },
    { title: "Sum of Two Integers", difficulty: "Medium", leetcode: "https://leetcode.com/problems/sum-of-two-integers/" },
    { title: "Maximum XOR of Two Numbers", difficulty: "Hard", leetcode: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" }
  ]
};
