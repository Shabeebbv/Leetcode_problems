class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        count=0
        x=0
        for i in range(len(nums)):
            if nums[i]==1:
                x+=1
                if x>count:
                    count=x
            else:
                x=0
        return count