class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        prefix=[0]*len(nums)
        prefix[0]=nums[0]
        for x in range(1,len(nums)):
            prefix[x]=prefix[x-1]+nums[x]
        return prefix