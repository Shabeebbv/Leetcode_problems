class Solution(object):
    def singleNumber(self, nums):
        count={}
        for i in range(len(nums)):
            value=nums[i]
            if value in count:
                count[value]+=1
            else:
                count[value]=1
        for key in count:
            if count[key]==1:
                return key