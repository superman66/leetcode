/**
 * sources: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 用于存储当前最长subString 的长度
  var subLength = 0
  var subStr = ''
  for (var i = 0; i < s.length; i++) {
    var char = s.charAt(i)
    var index = subStr.indexOf(char)

    // 如果当前char不存在，则添加到 subStr
    if (index === -1) {
      subStr += char
    } else {
      // 如果当前char存在于 subStr，则截取当前 char 在 subString 的位置+1 到结尾的字符串，再加上当前 char,拼接成新的 subString
      subStr = subStr.slice(index + 1)
      subStr += char
    }
    // 每次循环后比较当前 subString.lenght 与 subLength，保存最大值
    subLength = Math.max(subLength, subStr.length)
  }

  return subLength
}

var a = 'cdd'
lengthOfLongestSubstring(a)
