class Solution:
    def maxAdjacentDistance(self, nums: List[int]) -> int:
        res=abs(nums[0]-nums[-1])
        for i in range(len(nums)-1):
            if abs(nums[i]-nums[i+1])>res:
                res=abs(nums[i]-nums[i+1])
        return res
        