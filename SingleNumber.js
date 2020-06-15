var singleNumber = function(nums) {
    var count=0;
    for(var i=0;i<nums.length;i++){
        for(var j=0;j<nums.length;j++){
            if(nums[i]===nums[j]){count++;}
        }
        if(count===1){return nums[i]}
        else{count=0;}}};

/*

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

*/