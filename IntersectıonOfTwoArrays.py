class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        my_list=[]
        for i in range(len(nums1)):
            if nums1[i] in nums2:
                my_list.append(nums1[i])
        return list(set(my_list))
'''

Alternative Solution :

return list(set(nums1).intersection(nums2))

'''

'''
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.
 

'''