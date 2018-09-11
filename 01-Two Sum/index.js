/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(nums, target) {
  var hashTable = {}
  nums.forEach(function(num, index) {
    hashTable[num] = index
  })

  for (var i = 0; i < nums.length - 1; i++) {
    var anotherNum = target - nums[i]
    if (
      typeof hashTable[anotherNum] !== 'undefined' &&
      hashTable[anotherNum] !== i
    ) {
      return [i, hashTable[anotherNum]]
    }
  }
}
