def maximumGap(nums):
        nums.sort();
        maxx = 0
        if len(nums) < 2:
            return 0
        for i in range(0, len(nums) - 1):
            if maxx < nums[i + 1] - nums[i]:
                maxx = nums[i + 1] - nums[i]
        return print(maxx)
maximumGap([1,10000000])

"""

Given an unsorted array, find the maximum difference between the 
successive elements in its sorted form.

Return 0 if the array contains less than 2 elements.

Example 1:

Input: [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either
             (3,6) or (6,9) has the maximum difference 3.
Example 2:

Input: [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.

""""