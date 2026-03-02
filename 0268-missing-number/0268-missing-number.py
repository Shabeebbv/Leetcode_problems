class Solution(object):
    def missingNumber(self, nums):
       x=len(nums)
       for i in range(x+1):
            if i not in nums:
                return i
        