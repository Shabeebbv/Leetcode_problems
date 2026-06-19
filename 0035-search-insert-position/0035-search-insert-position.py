class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if target in nums:
            return nums.index(target)
        if nums[-1]<target:
            return len(nums)
        for x in range(len(nums)):
            if nums[x]>target:
                return x
        