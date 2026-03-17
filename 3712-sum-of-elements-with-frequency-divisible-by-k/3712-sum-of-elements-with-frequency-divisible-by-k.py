class Solution(object):
    def sumDivisibleByK(self, nums, k):
        sum=0
        obj={}
        for i in range(len(nums)):
            value=nums[i]
            if value in obj:
                obj[value]+=1
            else:
                obj[value]=1
        
        
        for key in obj:
            if obj[key]%k==0:
                sum+=obj[key]*key
        return sum
        