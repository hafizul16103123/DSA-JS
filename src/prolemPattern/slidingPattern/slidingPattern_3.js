/**
 *Given a string, find the length of longest substring
  that contains no more than k distinct characters
 *Example: acccpbbebi, k=3
 * answer:6 ;cause the correct sequence is cccpbb
 */

// Sliding window
const findLongestSubStringContainsKDistinctCharacterSlidingApproach = (
  str,
  distinctCharacterSize
) => {
  let windowStart = 0;
  let windowSet = new Set();
  let maxLenSoFar = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    windowSet.add(str[windowEnd]);
    //if window distinct charcter equal or greater than distinctCharacterSize then
    // take max length and substract windowStart value and increment windowStart index
    while (windowSet.size >= distinctCharacterSize) {
      let len = windowEnd - windowStart + 1;
      maxLenSoFar = Math.max(len, maxLenSoFar);
      windowSet.delete(str[windowStart]);
      windowStart++;
    }

  }
  return maxLenSoFar;
};

const str = "acccpbbebi";
const str2 = "aaaabbcccd";
const str3 = "abcdef";

console.log(
  findLongestSubStringContainsKDistinctCharacterSlidingApproach(str, 3)
);
console.log(
  findLongestSubStringContainsKDistinctCharacterSlidingApproach(str2, 1)
);
console.log(
  findLongestSubStringContainsKDistinctCharacterSlidingApproach(str3, 10)
);
