var threeSumClosest = (nums,target) =>{
    my_list=[];
    var begin=1000;
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            for(var z=j+1;z<nums.length;z++){
                my_list.push(nums[i]+nums[j]+nums[z])}}}
    var closenum=my_list.reduce(function(prev,curr){
        return (Math.abs(curr-target)<Math.abs(prev-target) ? curr : prev);})
        return closenum;}

/*

Given an array nums of n integers and an integer target, find three integers in nums 
such that the sum is closest to target. Return the sum of the three integers. You may assume that each input 
would have exactly one solution.

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 

Constraints:

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4

*/