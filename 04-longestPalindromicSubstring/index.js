/** scource: https://leetcode.com/problems/longest-palindromic-substring/description/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var maxLength = 1,
    start = 0

  // 长度为奇数 如 aba
  for (let i = 0; i < s.length; i++) {
    let prev = i - 1,
      next = i + 1
    while (
      prev >= 0 &&
      next <= s.length - 1 &&
      s.charAt(prev) === s.charAt(next)
    ) {
      const max = next - prev + 1
      if (max > maxLength) {
        maxLength = max
        start = prev
      }

      prev--
      next++
    }
  }

  // 长度为偶数 如 abba
  for (let i = 0; i < s.length; i++) {
    let prev = i,
      next = i + 1
    while (
      prev >= 0 &&
      next <= s.length - 1 &&
      s.charAt(prev) === s.charAt(next)
    ) {
      const max = next - prev + 1
      if (max > maxLength) {
        maxLength = max
        start = prev
      }

      prev--
      next++
    }
  }

  return s.substr(start, maxLength)
}

var str = 'abbadi'
console.log(longestPalindrome(str))
