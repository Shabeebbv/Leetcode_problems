class Solution(object):
    def absDifference(self,nums, k):
        srt=sorted(nums)
        srt1=sorted(nums,reverse=True)
        sum1=0
        sum2=0
        for i in range(0,k):
            sum1+=srt[i]
            sum2+=srt1[i]
        return abs(sum1-sum2)
            