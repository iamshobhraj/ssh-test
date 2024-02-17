/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
hjgfd
ghjk
rfgfhjk
gefht

var twoSumm = function(nums, target) {
  let obj = {};
  for(let i = 0; i < nums.length; i++){
      let diff = target - nums[i];
      if(obj[diff]!== undefined ){
          return [i, obj[diff]];
      }
      obj[nums[i]] = i;
  }
};

var twoSum = function(nums, target) {
  let sum = {}
  for(i=0; i<nums.length; i++) {
    diff
      sum[nums[i]] = i;
  }

  return sum;
};

let nums = [2,7,11,15], target = 9
let a = twoSumm(nums,target)
console.log(a)
