class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        sort=nums.sort()
        result=0
        n=len(nums)
        x=n-1
        for i in range(n//2):
            if x>=n/2:
                if nums[i]+nums[x]>result:
                    result=nums[i]+nums[x]
                x-=1
        return result