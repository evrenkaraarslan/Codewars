class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        for i in range(0,len(nums)):
            if(nums.count(i)!=1):
                return i
        return len(nums)

'''

Given an array containing n distinct numbers taken from 

0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8

'''