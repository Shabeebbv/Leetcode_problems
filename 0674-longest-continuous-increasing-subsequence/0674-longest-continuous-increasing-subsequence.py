class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        count=1
        x=1
        for i in range(len(nums)-1):
            if nums[i]<nums[i+1]:
                x+=1
                if x>count:
                    count=x
            else:
                x=1
        return count