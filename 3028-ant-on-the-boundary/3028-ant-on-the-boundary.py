class Solution:
    def returnToBoundaryCount(self, nums: List[int]) -> int:
        x=0
        y=0
        for i in range(len(nums)):
            x+=nums[i]
            if x==0:
                y+=1
        return y