# 最长回文字符串
>回文字符串是正读和反读都一样的字符串。比如 'level' 和 'noon'

## 解法一：中心扩展
每个字符都可以当作一个回文字符串。因此可以每个字符为中心，分别向两边扩展，以寻找最长的字符串。这样的时间复杂度为O(N^2)。
但是要区分字符串是偶数与奇数的情况：

* `abc`
* `abbc`

```js
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
```