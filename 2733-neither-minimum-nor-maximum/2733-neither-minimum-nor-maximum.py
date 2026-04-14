class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        mn=min(nums)
        mx=max(nums)
        for i in range(len(nums)):
            if nums[i] !=mn and nums[i] != mx:
                return nums[i]
        return -1