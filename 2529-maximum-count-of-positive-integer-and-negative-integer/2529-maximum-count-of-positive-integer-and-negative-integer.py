class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        neg=0
        pos=0
        zero=0
        for i in range(len(nums)):
            if nums[i]>0:
                pos+=1
            elif nums[i]<0:
                neg+=1
            else:
                zero+=1
        if neg>pos:
            return neg
        return pos